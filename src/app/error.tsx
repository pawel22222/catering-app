"use client";

import { Heading } from "@/components/heading";
import { Link } from "@/components/link";

export default function Error() {
  return (
    <div className="flex mx-auto flex-col">
      <Heading className="text-red-500">Something went wrong...</Heading>
      <Link className="text-center" href="/">
        Back to home page
      </Link>
    </div>
  );
}
