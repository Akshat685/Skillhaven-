"use client";
import { useQuery, gql } from "@apollo/client";

const GET_FREELANCERS = gql`
  query {
    users {
      id
      name
      freelancer {
        bio
        skills
      }
    }
  }
`;

export default function FreelancersPage() {
  const { data, loading } = useQuery(GET_FREELANCERS);
  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Freelancer Directory</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {data.users
          .filter((u: any) => u.freelancer)
          .map((u: any) => (
            <div key={u.id} className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold">{u.name}</h3>
              <p className="mt-1 text-gray-600">{u.freelancer.bio}</p>
              <p className="mt-1 text-sm text-gray-500">Skills: {u.freelancer.skills.join(', ')}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
