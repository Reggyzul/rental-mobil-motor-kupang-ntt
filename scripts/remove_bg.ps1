Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\UsEr\.gemini\antigravity-ide\brain\d2040537-12f3-4a0a-bf83-c53c9837452a\.user_uploaded\media_1787300270522.jpg"
$destPath = "c:\Users\UsEr\.gemini\antigravity-ide\scratch\rental mobil motor kupang ntt\public\logo.png"

$img = [System.Drawing.Image]::FromFile($srcPath)
$width = $img.Width
$height = $img.Height

$bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, 0, 0, $width, $height)
$g.Dispose()
$img.Dispose()

# Lock bits for fast processing
$rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$bmpData = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$stride = $bmpData.Stride
$bytes = $stride * $height
$pixelBuffer = New-Object byte[] $bytes
[System.Runtime.InteropServices.Marshal]::Copy($bmpData.Scan0, $pixelBuffer, 0, $bytes)

# Visited / Background mask
$bgMask = New-Object bool[] ($width * $height)
$queue = New-Object System.Collections.Generic.Queue[int]

function IsDarkPixel([int]$x, [int]$y) {
    $idx = ($y * $stride) + ($x * 4)
    $b = $pixelBuffer[$idx]
    $g = $pixelBuffer[$idx + 1]
    $r = $pixelBuffer[$idx + 2]
    # Background threshold: dark background near black
    $maxVal = [Math]::Max($r, [Math]::Max($g, $b))
    return ($maxVal -lt 38)
}

# Seed from all borders
for ($x = 0; $x -lt $width; $x++) {
    # top
    if (IsDarkPixel $x 0) {
        $p = 0 * $width + $x
        if (-not $bgMask[$p]) { $bgMask[$p] = $true; $queue.Enqueue($p) }
    }
    # bottom
    if (IsDarkPixel $x ($height - 1)) {
        $p = ($height - 1) * $width + $x
        if (-not $bgMask[$p]) { $bgMask[$p] = $true; $queue.Enqueue($p) }
    }
}

for ($y = 0; $y -lt $height; $y++) {
    # left
    if (IsDarkPixel 0 $y) {
        $p = $y * $width + 0
        if (-not $bgMask[$p]) { $bgMask[$p] = $true; $queue.Enqueue($p) }
    }
    # right
    if (IsDarkPixel ($width - 1) $y) {
        $p = $y * $width + ($width - 1)
        if (-not $bgMask[$p]) { $bgMask[$p] = $true; $queue.Enqueue($p) }
    }
}

# Flood fill
while ($queue.Count -gt 0) {
    $curr = $queue.Dequeue()
    $cx = $curr % $width
    $cy = [Math]::Floor($curr / $width)

    # 4 neighbors
    $neighbors = @(
        @($cx - 1, $cy),
        @($cx + 1, $cy),
        @($cx, $cy - 1),
        @($cx, $cy + 1)
    )

    foreach ($n in $neighbors) {
        $nx = $n[0]
        $ny = $n[1]
        if ($nx -ge 0 -and $nx -lt $width -and $ny -ge 0 -and $ny -lt $height) {
            $np = $ny * $width + $nx
            if (-not $bgMask[$np]) {
                if (IsDarkPixel $nx $ny) {
                    $bgMask[$np] = $true
                    $queue.Enqueue($np)
                }
            }
        }
    }
}

# Apply transparency to bgMask pixels with soft edge feathering
for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $p = $y * $width + $x
        $idx = ($y * $stride) + ($x * 4)
        if ($bgMask[$p]) {
            $pixelBuffer[$idx + 3] = 0 # Alpha = 0 (Transparent)
        } else {
            # Check if adjacent to background for slight anti-aliasing
            $b = $pixelBuffer[$idx]
            $gVal = $pixelBuffer[$idx + 1]
            $r = $pixelBuffer[$idx + 2]
            $brightness = [Math]::Max($r, [Math]::Max($gVal, $b))
            if ($brightness -lt 45) {
                # soft transition near edges
                $isNearBg = $false
                foreach ($dx in @(-1, 0, 1)) {
                    foreach ($dy in @(-1, 0, 1)) {
                        $tx = $x + $dx
                        $ty = $y + $dy
                        if ($tx -ge 0 -and $tx -lt $width -and $ty -ge 0 -and $ty -lt $height) {
                            if ($bgMask[$ty * $width + $tx]) { $isNearBg = $true; break }
                        }
                    }
                    if ($isNearBg) { break }
                }
                if ($isNearBg) {
                    $alpha = [byte][Math]::Min(255, [Math]::Max(0, ($brightness - 10) * 8))
                    $pixelBuffer[$idx + 3] = $alpha
                }
            }
        }
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($pixelBuffer, 0, $bmpData.Scan0, $bytes)
$bmp.UnlockBits($bmpData)

# Save as transparent PNG
$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Output "Successfully converted and saved transparent logo to: $destPath"
