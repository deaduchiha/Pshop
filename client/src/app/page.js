export default async function Home() {
  const res = await fetch("http://localhost:3000/category");
  const data = await res.json();

  return <div>hey sHome </div>;
}
