$csharpSource = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Collections.Generic;

public class LogoProcessor2 {
    private static bool IsPureBlack(int x, int y, byte[] srcBytes, int stride, int threshold) {
        int idx = y * stride + x * 4;
        byte b = srcBytes[idx];
        byte g = srcBytes[idx + 1];
        byte r = srcBytes[idx + 2];
        return (r <= threshold && g <= threshold && b <= threshold);
    }

    public static void Process(string inputPath, string outputPath, int threshold) {
        using (Bitmap src = new Bitmap(inputPath)) {
            int width = src.Width;
            int height = src.Height;
            using (Bitmap result = new Bitmap(width, height, PixelFormat.Format32bppArgb)) {
                BitmapData srcData = src.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
                BitmapData resData = result.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);
                
                int stride = Math.Abs(srcData.Stride);
                int bytes = stride * height;
                byte[] srcBytes = new byte[bytes];
                byte[] resBytes = new byte[bytes];
                
                System.Runtime.InteropServices.Marshal.Copy(srcData.Scan0, srcBytes, 0, bytes);
                
                bool[] isBg = new bool[width * height];
                Queue<int> queue = new Queue<int>();
                
                for (int x = 0; x < width; x++) {
                    if (IsPureBlack(x, 0, srcBytes, stride, threshold)) { int p = x; isBg[p] = true; queue.Enqueue(p); }
                    if (IsPureBlack(x, height - 1, srcBytes, stride, threshold)) { int p = (height - 1) * width + x; isBg[p] = true; queue.Enqueue(p); }
                }
                for (int y = 0; y < height; y++) {
                    if (IsPureBlack(0, y, srcBytes, stride, threshold)) { int p = y * width; if (!isBg[p]) { isBg[p] = true; queue.Enqueue(p); } }
                    if (IsPureBlack(width - 1, y, srcBytes, stride, threshold)) { int p = y * width + (width - 1); if (!isBg[p]) { isBg[p] = true; queue.Enqueue(p); } }
                }
                
                int[] dx = new int[] { -1, 1, 0, 0 };
                int[] dy = new int[] { 0, 0, -1, 1 };
                
                while (queue.Count > 0) {
                    int curr = queue.Dequeue();
                    int cx = curr % width;
                    int cy = curr / width;
                    
                    for (int i = 0; i < 4; i++) {
                        int nx = cx + dx[i];
                        int ny = cy + dy[i];
                        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                            int np = ny * width + nx;
                            if (!isBg[np] && IsPureBlack(nx, ny, srcBytes, stride, threshold)) {
                                isBg[np] = true;
                                queue.Enqueue(np);
                            }
                        }
                    }
                }
                
                // Crop bounds
                int minX = width, maxX = 0, minY = height, maxY = 0;

                for (int y = 0; y < height; y++) {
                    for (int x = 0; x < width; x++) {
                        int p = y * width + x;
                        int idx = y * stride + x * 4;
                        byte b = srcBytes[idx];
                        byte g = srcBytes[idx + 1];
                        byte r = srcBytes[idx + 2];
                        
                        if (isBg[p]) {
                            resBytes[idx] = 0;
                            resBytes[idx + 1] = 0;
                            resBytes[idx + 2] = 0;
                            resBytes[idx + 3] = 0; // Transparent
                        } else {
                            resBytes[idx] = b;
                            resBytes[idx + 1] = g;
                            resBytes[idx + 2] = r;
                            resBytes[idx + 3] = 255;
                            
                            if (x < minX) minX = x;
                            if (x > maxX) maxX = x;
                            if (y < minY) minY = y;
                            if (y > maxY) maxY = y;
                        }
                    }
                }
                
                System.Runtime.InteropServices.Marshal.Copy(resBytes, 0, resData.Scan0, bytes);
                src.UnlockBits(srcData);
                result.UnlockBits(resData);

                // Trim to content
                if (maxX > minX && maxY > minY) {
                    int pad = 10;
                    minX = Math.Max(0, minX - pad);
                    minY = Math.Max(0, minY - pad);
                    maxX = Math.Min(width - 1, maxX + pad);
                    maxY = Math.Min(height - 1, maxY + pad);
                    int cropW = maxX - minX + 1;
                    int cropH = maxY - minY + 1;

                    using (Bitmap cropped = new Bitmap(cropW, cropH, PixelFormat.Format32bppArgb)) {
                        using (Graphics g = Graphics.FromImage(cropped)) {
                            g.DrawImage(result, new Rectangle(0, 0, cropW, cropH), new Rectangle(minX, minY, cropW, cropH), GraphicsUnit.Pixel);
                        }
                        cropped.Save(outputPath, ImageFormat.Png);
                    }
                } else {
                    result.Save(outputPath, ImageFormat.Png);
                }
            }
        }
    }
}
"@

Add-Type -TypeDefinition $csharpSource -ReferencedAssemblies System.Drawing

$src = "c:\Users\UsEr\.gemini\antigravity-ide\brain\d2040537-12f3-4a0a-bf83-c53c9837452a\.user_uploaded\media_1787300270522.jpg"
$dest = "c:\Users\UsEr\.gemini\antigravity-ide\scratch\rental mobil motor kupang ntt\public\logo.png"

[LogoProcessor2]::Process($src, $dest, 8)
Write-Output "Done"
