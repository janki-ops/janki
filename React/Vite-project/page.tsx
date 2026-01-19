
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
      {data.users.data.map((i:any) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  );
}