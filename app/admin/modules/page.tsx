// app/admin/modules/page.tsx
"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const GET_MODULES = gql`
  query {
    modules {
      id
      title
      course {
        title
      }
    }
  }
`;

export default function AdminModulesPage() {
  const { data, loading, error } = useQuery(GET_MODULES);

  if (loading) return <p>Loading modules...</p>;
  if (error) return <p>Error loading modules.</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📚 Manage Modules</h2>
      <ul className="space-y-4">
        {data.modules.map((mod: any) => (
          <li key={mod.id} className="p-4 border rounded hover:bg-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{mod.title}</h3>
                <p className="text-sm text-gray-600">
                  Course: {mod.course?.title || "(No Course)"}
                </p>
              </div>
              <Link
                href={`/admin/modules/${mod.id}`}
                className="text-blue-600 hover:underline"
              >
                ✏️ Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
