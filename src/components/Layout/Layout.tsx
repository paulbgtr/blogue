import { ReactNode } from "react";
import { useRouter } from "next/router";

import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname !== "/" && <Navbar />}
      <div className="min-h-screen">
        <div className="p-6 lg:p-16 md:p-12">{children}</div>
      </div>
      <Footer />
    </>
  );
};
