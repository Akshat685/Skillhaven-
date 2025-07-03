"use client";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const GET_COURSES = gql`
  query {
    courses {
      id
      title
      description
    }
  }
`;

export default function AdminCoursesPage() {
  const { data, loading, error } = useQuery(GET_COURSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load courses</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📘 Manage Courses</h2>
      <ul className="space-y-4">
        {data.courses.map((course: any) => (
          <li
            key={course.id}
            className="p-4 border rounded hover:bg-gray-100 transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>
              <Link
                href={`/admin/courses/${course.id}`}
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
