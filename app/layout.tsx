// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Providers from "@/app/components/Providers"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SkillHaven",
  description: "AI-Powered Learning and Freelance Platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-50 text-slate-800">
            <header className="bg-white shadow p-4">
              <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">SkillHaven</h1>
                <div className="space-x-4 text-sm">
                  <a href="/" className="hover:underline">Home</a>
                  <a href="/courses" className="hover:underline">Courses</a>
                  <a href="/freelancers" className="hover:underline">Freelancers</a>
                  <a href="/admin/courses" className="hover:underline text-red-500">Admin</a>
                </div>
              </nav>
            </header>
            <main className="max-w-6xl mx-auto py-8 px-4">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
