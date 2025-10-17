import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 加載字體
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children} {/* 確保子元素的靜態內容 */}
      </body>
    </html>
  );
}
