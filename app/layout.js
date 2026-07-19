import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "My Terminal Bio",
  description: "Link in bio bergaya retro terminal CLI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} font-mono bg-black text-green-500 antialiased`}>
        <div className="min-h-screen flex items-center justify-center bg-[#0a0e14] p-6 font-mono">
          <div className="relative w-full max-w-3xl rounded-xl border border-[#1f2733] bg-[#0d1117] shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1f2733] bg-[#0f141c]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-xs text-[#5c6773]">
                guest@dev-machine: ~
              </span>
            </div>
            {children}            
          </div>
        </div>
      </body>
    </html>
  );
}
