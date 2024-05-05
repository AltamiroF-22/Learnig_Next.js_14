"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = (): void => {
    alert("order successfull");

    router.push("/");
    // router.replace("/")
    // router.back()
    // router.forward()
  };

  return (
    <>
      <h1 className="text-orange-400 font-bold text-3xl">Order Product</h1>
      <button
        className="border border-violet-700 hover:bg-violet-700 p-2 m-2 rounded duration-200 text-violet-700 hover:text-white font-semibold"
        onClick={handleClick}
      >
        Place Order
      </button>
    </>
  );
}
