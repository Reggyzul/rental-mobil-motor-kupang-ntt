$csharpSource = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Collections.Generic;

public class LogoProcessor {
    private static bool IsDark(int x, int y, byte[] srcBytes, int stride, int threshold) {
        int idx = y * stride + x * 4;
        byte b = srcBytes[idx];
        byte g = srcBytes[idx + 1];
        byte r = srcBytes[idx + 2];
        return Math.Max(r, Math.Max(g, b)) < threshold;
    }

    public static void RemoveBlackBackground(string inputPath, string outputPath, int threshold) {
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
                    if (IsDark(x, 0, srcBytes, stride, threshold)) { int p = x; isBg[p] = true; queue.Enqueue(p); }
                    if (IsDark(x, height - 1, srcBytes, stride, threshold)) { int p = (height - 1) * width + x; isBg[p] = true; queue.Enqueue(p); }
                }
                for (int y = 0; y < height; y++) {
                    if (IsDark(0, y, srcBytes, stride, threshold)) { int p = y * width; if (!isBg[p]) { isBg[p] = true; queue.Enqueue(p); } }
                    if (IsDark(width - 1, y, srcBytes, stride, threshold)) { int p = y * width + (width - 1); if (!isBg[p]) { isBg[p] = true; queue.Enqueue(p); } }
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
                            if (!isBg[np] && IsDark(nx, ny, srcBytes, stride, threshold)) {
                                isBg[np] = true;
                                queue.Enqueue(np);
                            }
                        }
                    }
                }
                
                for (int y = 0; y < height; y++) {
                    for (int x = 0; x < width; x++) {
                        int p = y * width + x;
                        int idx = y * stride + x * 4;
                        byte b = srcBytes[idx];
                        byte g = srcBytes[idx + 1];
                        byte r = srcBytes[idx + 2];
                        
                        resBytes[idx] = b;
                        resBytes[idx + 1] = g;
                        resBytes[idx + 2] = r;
                        
                        if (isBg[p]) {
                            resBytes[idx + 3] = 0; // Transparent
                        } else {
                            int brightness = Math.Max(r, Math.Max(g, b));
                            bool nearBg = false;
                            for (int ox = -1; ox <= 1; ox++) {
                                for (int oy = -1; oy <= 1; oy++) {
                                    int tx = x + ox;
                                    int ty = y + oy;
                                    if (tx >= 0 && tx < width && ty >= 0 && ty < height && isBg[ty * width + tx]) {
                                        nearBg = true;
                                        break;
                                    }
                                }
                                if (nearBg) break;
                            }
                            if (nearBg && brightness < threshold + 30) {
                                int a = Math.Min(255, Math.Max(0, (brightness - 10) * 8));
                                resBytes[idx + 3] = (byte)a;
                            } else {
                                resBytes[idx + 3] = 255;
                            }
                        }
                    }
                }
                
                System.Runtime.InteropServices.Marshal.Copy(resBytes, 0, resData.Scan0, bytes);
                src.UnlockBits(srcData);
                result.UnlockBits(resData);
                
                result.Save(outputPath, ImageFormat.Png);
            }
        }
    }
}
"@

Add-Type -TypeDefinition $csharpSource -ReferencedAssemblies System.Drawing

$src = "c:\Users\UsEr\.gemini\antigravity-ide\brain\d2040537-12f3-4a0a-bf83-c53c9837452a\.user_uploaded\media_1787300270522.jpg"
$dest = "c:\Users\UsEr\.gemini\antigravity-ide\scratch\rental mobil motor kupang ntt\public\logo.png"

[LogoProcessor]::RemoveBlackBackground($src, $dest, 45)

Write-Output "Successfully generated transparent logo: $dest"
