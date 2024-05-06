"use client";
import { ErrorProps } from "@/interfaces/errorProps";

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  return (
    <div className="flex justify-between items-center w-full text-red-600 bg-red-200 border border-red-600">
      {error.message}
      <button
        onClick={reset}
        className="bg-slate-950 text-slate-300 font-semibold p-3 border-none outline-none"
      >
        Try again
      </button>
    </div>
  );
}
