import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link className="underline p-1 text-blue-700" href="/blog">
        Blog
      </Link>
      <Link className="underline p-1 text-blue-700" href="/products">
        Products
      </Link>
    </main>
  );
}
