// app/admin/modules/[id]/page.tsx
"use client";

import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GET_MODULE = gql`
  query GetModule($id: ID!) {
    module(id: $id) {
      id
      title
      course {
        id
      }
    }
    courses {
      id
      title
    }
  }
`;

const UPDATE_MODULE = gql`
  mutation UpdateModule($id: ID!, $title: String!, $courseId: ID!) {
    updateModule(id: $id, title: $title, courseId: $courseId) {
      id
      title
    }
  }
`;

export default function EditModulePage() {
  const { id } = useParams();
  const router = useRouter();
  const { data, loading } = useQuery(GET_MODULE, { variables: { id } });
  const [updateModule] = useMutation(UPDATE_MODULE);

  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");

  useEffect(() => {
    if (data?.module) {
      setTitle(data.module.title);
      setCourseId(data.module.course?.id || "");
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateModule({ variables: { id, title, courseId } });
    router.push("/admin/modules");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">✏️ Edit Module</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium">Course</label>
          <select
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Select a course</option>
            {data?.courses?.map((course: any) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Module
        </button>
      </form>
    </div>
  );
}
