"use client";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const GET_COURSE_DETAIL = gql`
  query ($id: ID!) {
    courses {
      id
      title
      modules {
        id
        title
        lessons {
          id
          title
          slug
        }
      }
    }
  }
`;

export default function CoursePage() {
  const params = useParams();
  const id = params && typeof params.id === "string" ? params.id : Array.isArray(params?.id) ? params?.id[0] : undefined;
  const { data, loading } = useQuery(GET_COURSE_DETAIL);

  if (loading) return <p>Loading...</p>;

  const course = data?.courses.find((c: any) => c.id === id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      {course.modules.map((mod: any) => (
        <div key={mod.id} className="mt-4">
          <h2 className="text-lg font-semibold">{mod.title}</h2>
          <ul className="list-disc ml-6">
            {mod.lessons.map((lesson: any) => (
              <li key={lesson.id}>
                <a href={`/lesson/${lesson.slug}`} className="text-blue-600 hover:underline">
                  {lesson.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
