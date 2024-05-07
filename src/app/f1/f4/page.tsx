import Link from "next/link";

export default function F4() {
  return (
    <>
      <h1> route F4</h1>
      <Link href="/f1/f3">F3</Link>
      <Link href="/about">about</Link>
    </>
  );
}
