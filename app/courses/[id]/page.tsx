// app/courses/[id]/page.tsx - View modules inside course
"use client";

import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import Link from "next/link";

const GET_COURSE_MODULES = gql`
  query GetCourseModules($id: ID!) {
    course(id: $id) {
      title
      modules {
        id
        title
      }
    }
  }
`;

export default function CourseDetailPage() {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_COURSE_MODULES, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{data.course.title}</h1>
      <ul className="space-y-3">
        {data.course.modules.map((mod: any) => (
          <li key={mod.id} className="p-3 border rounded">
            <Link
              href={`/lesson/${mod.id}`}
              className="text-blue-600 underline"
            >
              {mod.title} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
