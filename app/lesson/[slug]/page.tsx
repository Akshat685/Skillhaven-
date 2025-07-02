"use client";
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";
import sanityClient from "@/lib/sanity";

export default function LessonPage({ params }: { params: { slug: string } }) {
  const [lesson, setLesson] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "lesson" && slug.current == $slug][0]`, { slug: params.slug })
      .then(setLesson);
  }, [params.slug]);

  if (!lesson) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>
      <PortableText value={lesson.content} />
    </div>
  );
}
