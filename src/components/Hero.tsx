import Link from "next/link";
import { ReactNode } from "react";

export const Hero = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen hero">
      <div className="text-center hero-content">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
};
