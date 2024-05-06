"use client";
import { ChildrenProps } from "@/interfaces/children";
import { getRandomInt } from "@/utils/generate-error";

export default function ProducDetailsLayout({ children }: ChildrenProps) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading Product");
  }

  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  );
}
