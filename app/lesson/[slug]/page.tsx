// app/lesson/[slug]/page.tsx - Sanity-powered lesson viewer
import { getClient } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export const revalidate = 60;

const query = `
  *[_type == "lesson" && slug.current == $slug][0] {
    title,
    content
  }
`;

export default async function LessonPage({ params }: { params: { slug: string } }) {
  const client = getClient();
  const data = await client.fetch(query, { slug: params.slug });

  if (!data) return notFound();

  return (
    <div className="prose max-w-3xl mx-auto">
      <h1>{data.title}</h1>
      <PortableText value={data.content} />
    </div>
  );
}

