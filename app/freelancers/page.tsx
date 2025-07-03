// app/freelancers/page.tsx - Public freelancer directory
"use client";

import { gql, useQuery } from "@apollo/client";

const GET_FREELANCERS = gql`
  query GetFreelancers {
    freelancers {
      id
      name
      bio
      skills
    }
  }
`;

export default function FreelancersPage() {
  const { data, loading } = useQuery(GET_FREELANCERS);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">👩‍💻 Freelancers</h1>
      <ul className="space-y-4">
        {data.freelancers.map((user: any) => (
          <li key={user.id} className="border p-4 rounded">
            <h2 className="font-semibold">{user.name}</h2>
            <p>{user.bio}</p>
            <div className="text-sm text-gray-500">
              Skills: {user.skills.join(", ")}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}