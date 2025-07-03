// app/admin/lessons/[id]/page.tsx
"use client";

import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GET_LESSON = gql`
  query GetLesson($id: ID!) {
    lesson(id: $id) {
      id
      title
      slug
    }
  }
`;

const UPDATE_LESSON = gql`
  mutation UpdateLesson($id: ID!, $title: String!, $slug: String!) {
    updateLesson(id: $id, title: $title, slug: $slug) {
      id
      title
      slug
    }
  }
`;

export default function EditLessonPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data, loading } = useQuery(GET_LESSON, { variables: { id } });
  const [updateLesson] = useMutation(UPDATE_LESSON);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (data?.lesson) {
      setTitle(data.lesson.title);
      setSlug(data.lesson.slug);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateLesson({ variables: { id, title, slug } });
    router.push("/admin/lessons");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">✏️ Edit Lesson</h2>
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
          <label className="block font-medium">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Lesson
        </button>
      </form>
    </div>
  );
}
