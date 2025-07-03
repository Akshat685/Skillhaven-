// app/admin/page.tsx
"use client";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Welcome to the Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <Link
            href="/admin/courses"
            className="block p-4 border rounded hover:bg-gray-100 transition"
          >
            📘 Manage Courses
          </Link>
        </li>
        <li>
          <Link
            href="/admin/modules"
            className="block p-4 border rounded hover:bg-gray-100 transition"
          >
            📚 Manage Modules
          </Link>
        </li>
        <li>
          <Link
            href="/admin/lessons"
            className="block p-4 border rounded hover:bg-gray-100 transition"
          >
            🧠 Manage Lessons
          </Link>
        </li>
      </ul>
    </div>
  );
}
