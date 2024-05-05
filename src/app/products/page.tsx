import Link from "next/link";
import { ProductsLinksProps } from "@/interfaces/nav-links";

const data: ProductsLinksProps[] = [
  {
    _id: "1",
    text: "Product 1",
  },
  {
    _id: "2",
    text: "Product 2",
  },
  {
    _id: "3",
    text: "Product 3",
  },
  {
    _id: "4",
    text: "Product 4",
  },
  {
    _id: "5",
    text: "Product 5",
  },
];

export default function Products() {
  return (
    <>
      <Link href="/" className="underline p-1 text-blue-700">
        Home
      </Link>
      <h1 className="text-3xl text-rose-600">Products List</h1>

      {data.map((item) => (
        <h2 key={item._id}>
          <Link href={`products/${item._id}`}>{item.text}</Link>
        </h2>
      ))}
      <h2>
        <Link href={`products/6`} replace>
          Product 6 (back to home)
        </Link>
      </h2>
    </>
  );
}
