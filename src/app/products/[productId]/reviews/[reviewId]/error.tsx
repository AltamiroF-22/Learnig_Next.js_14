"use client";
import { ErrorProps } from "@/interfaces/errorProps";

export default function ErrorBoundary({ error }: ErrorProps) {
  return (
    <div className="w-full text-center text-red-600 p-4 bg-red-200 border border-red-600">
      {error.message}
    </div>
  );
}
