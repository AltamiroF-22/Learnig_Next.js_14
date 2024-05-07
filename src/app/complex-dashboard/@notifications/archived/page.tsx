import Card from "@/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <Card>
      <div>Archived</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
