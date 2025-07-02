export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Admin Dashboard</h1>
      <nav className="flex gap-4 mb-6">
        <a href="/admin/courses" className="text-blue-500 underline">Courses</a>
        <a href="/admin/modules" className="text-blue-500 underline">Modules</a>
        <a href="/admin/lessons" className="text-blue-500 underline">Lessons</a>
      </nav>
      <main>{children}</main>
    </div>
  );
}
