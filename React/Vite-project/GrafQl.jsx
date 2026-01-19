import Image from "next/image";
export default async function Home() {
  const res = await fetch("https://graphqlzero.almansi.me/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          users {
            data { id name }
          }
        }
      `,
    }),
  });
  const { data } = await res.json();
  return (
    <ul>
      {data.users.data.map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  );
}