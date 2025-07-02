// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          🚀 Welcome to SkillHaven
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Learn, grow, and showcase your skills on our AI-powered platform.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            📚 Explore Courses
          </Link>
          <Link
            href="/freelancers"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            👩‍💻 Find Freelancers
          </Link>
        </div>
      </div>
    </main>
  );
}
