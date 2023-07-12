import Link from "next/link";

export const Hero = () => {
  return (
    <div className="min-h-screen hero">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">blogue</h1>
          <p className="py-6">
            Explore Boundless Ideas on an Open Source Blogging Platform
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/dashboard" className="btn btn-primary">
              Get Started
            </Link>
            <Link
              href="https://github.com/gibsol/blogue"
              className="btn btn-primary"
            >
              Run Locally
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
