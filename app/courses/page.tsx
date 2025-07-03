// app/courses/page.tsx - Public course browser
"use client";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const GET_COURSES = gql`
  query GetCourses {
    courses {
      id
      title
      description
    }
  }
`;

export default function CoursesPage() {
  const { data, loading } = useQuery(GET_COURSES);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📚 Available Courses</h1>
      <ul className="space-y-4">
        {data?.courses?.map((course: any) => (
          <li key={course.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{course.title}</h2>
            <p className="text-sm text-gray-600">{course.description}</p>
            <Link
              href={`/courses/${course.id}`}
              className="text-blue-600 underline mt-2 inline-block"
            >
              View Modules →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}