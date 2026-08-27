Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\UsEr\.gemini\antigravity-ide\brain\9ec26155-7b99-49c3-ad2a-e00a61bd8b12\.user_uploaded\media_1787834638691.jpg"
$outputPath = "public\logo.png"

$bmp = [System.Drawing.Bitmap]::new($inputPath)
$width = $bmp.Width
$height = $bmp.Height

Write-Host "Image size: $width x $height"

# Sample corner color
$c1 = $bmp.GetPixel(5, 5)
Write-Host "Corner pixel: R=$($c1.R), G=$($c1.G), B=$($c1.B)"

# Background is light off-white (R ~ 242-248, G ~ 241-247, B ~ 238-245)
# Foreground is navy blue (R < 100, G < 120, B < 180) and gold arrow (R ~ 180-220, G ~ 130-170, B ~ 60-110).
# We can create a 32-bit ARGB bitmap
$outBmp = [System.Drawing.Bitmap]::new($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$minX = $width
$maxX = 0
$minY = $height
$maxY = 0

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        
        # Calculate brightness / whiteness
        # Pure background is close to (245, 243, 238)
        # Difference from background color
        $diffR = [Math]::Abs($p.R - 245)
        $diffG = [Math]::Abs($p.G - 243)
        $diffB = [Math]::Abs($p.B - 238)
        $maxDiff = [Math]::Max($diffR, [Math]::Max($diffG, $diffB))
        
        # Also check brightness: if R > 230 and G > 228 and B > 222
        $isLightBg = ($p.R -gt 232 -and $p.G -gt 230 -and $p.B -gt 224 -and $maxDiff -lt 25)
        
        if ($isLightBg) {
            # Completely transparent
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            # Semi-transparent smoothing near edge
            if ($p.R -gt 215 -and $p.G -gt 212 -and $p.B -gt 205) {
                # Edge transition
                $dist = [Math]::Sqrt([Math]::Pow($p.R - 245, 2) + [Math]::Pow($p.G - 243, 2) + [Math]::Pow($p.B - 238, 2))
                $alpha = [int][Math]::Min(255, [Math]::Max(0, ($dist / 35.0) * 255))
                $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
            } else {
                # Fully opaque foreground logo
                $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $p.R, $p.G, $p.B))
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
}

Write-Host "Bounding box: X=[$minX, $maxX], Y=[$minY, $maxY]"

# Crop with nice padding around the logo
$padding = 16
$cropX = [Math]::Max(0, $minX - $padding)
$cropY = [Math]::Max(0, $minY - $padding)
$cropW = [Math]::Min($width - $cropX, ($maxX - $minX) + ($padding * 2))
$cropH = [Math]::Min($height - $cropY, ($maxY - $minY) + ($padding * 2))

$cropRect = [System.Drawing.Rectangle]::new($cropX, $cropY, $cropW, $cropH)
$croppedBmp = $outBmp.Clone($cropRect, $outBmp.PixelFormat)

# Save as PNG with transparent background
$croppedBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$bmp.Dispose()
$outBmp.Dispose()
$croppedBmp.Dispose()

Write-Host "Logo successfully saved to $outputPath"
