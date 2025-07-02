"use client";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const GET_COURSES = gql`
  query {
    courses {
      id
      title
    }
  }
`;

export default function CourseList() {
  const { data, loading } = useQuery(GET_COURSES);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <ul className="space-y-4">
        {data.courses.map((course: any) => (
          <li key={course.id} className="bg-white p-4 shadow rounded">
            <Link href={`/courses/${course.id}`} className="text-blue-600 hover:underline">
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
