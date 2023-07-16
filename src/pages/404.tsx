import Link from "next/link";

import { Hero } from "@/components/Hero";

const NotFound = () => {
  return (
    <Hero>
      <h1 className="text-5xl font-bold">404</h1>
      <p className="py-6">The page you are looking for does not exist</p>
      <Link href="/dashboard" className="btn btn-primary">
        Go to Dashboard
      </Link>
    </Hero>
  );
};

export default NotFound;
