import { Heading } from "@/components/heading";
import { Link } from "@/components/link";

export default function NotFound() {
  return (
    <main className="flex mx-auto flex-col">
      <Heading className="text-orange-500">Item not found</Heading>
      <Link className="text-center" href="/">
        Back to home page
      </Link>
    </main>
  );
}
