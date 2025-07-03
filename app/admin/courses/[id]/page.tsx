"use client";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const GET_COURSE = gql`
  query Course($id: ID!) {
    course(id: $id) {
      id
      title
      description
    }
  }
`;

const UPDATE_COURSE = gql`
  mutation UpdateCourse($id: ID!, $title: String!, $description: String!) {
    updateCourse(id: $id, title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

export default function EditCoursePage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const router = useRouter();

  const { data, loading } = useQuery(GET_COURSE, {
    variables: { id },
  });

  const [updateCourse] = useMutation(UPDATE_COURSE);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data?.course) {
      setTitle(data.course.title);
      setDescription(data.course.description);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateCourse({ variables: { id, title, description } });
    router.push("/admin/courses");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">✏️ Edit Course</h2>
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
          <label className="block font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Course
        </button>
      </form>
    </div>
  );
}
