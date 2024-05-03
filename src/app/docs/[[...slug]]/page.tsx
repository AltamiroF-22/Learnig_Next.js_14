export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <main className="min-h-screen">
        <h1 className="text-center pt-5">
          Viewing docs for feature{" "}
          <span className="text-orange-600">{params.slug[0]}</span> and concept{" "}
          <span className="text-orange-600">{params.slug[1]}</span>
        </h1>
      </main>
    );
  } else if (params.slug?.length === 1) {
    return (
      <main className="min-h-screen">
        <h1 className="text-center pt-5">
          Viewing docs for feature{" "}
          <span className="text-orange-600">{params.slug[0]}</span>
        </h1>
      </main>
    );
  }
  return (
    <main className="min-h-screen flex justify-center items-center">
      <h1 className="text-blue-900 font-bold">Docs Home Page</h1>
    </main>
  );
}
