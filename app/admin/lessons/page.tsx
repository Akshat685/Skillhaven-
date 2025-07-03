// app/admin/lessons/page.tsx
"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const GET_LESSONS = gql`
  query {
    lessons {
      id
      title
      slug
      module {
        title
      }
    }
  }
`;

export default function AdminLessonsPage() {
  const { data, loading, error } = useQuery(GET_LESSONS);

  if (loading) return <p>Loading lessons...</p>;
  if (error) return <p>Failed to load lessons</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">🧠 Manage Lessons</h2>
      <ul className="space-y-4">
        {data.lessons.map((lesson: any) => (
          <li
            key={lesson.id}
            className="p-4 border rounded hover:bg-gray-100 transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{lesson.title}</h3>
                <p className="text-sm text-gray-600">
                  Module: {lesson.module?.title || "(Unassigned)"}
                </p>
                <p className="text-xs text-gray-400">Slug: {lesson.slug}</p>
              </div>
              <Link
                href={`/admin/lessons/${lesson.id}`}
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
