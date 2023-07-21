import { ReactNode } from "react";
import { useRouter } from "next/router";

import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const isNavbarNeeded = () => {
    return (
      router.pathname !== "/login" &&
      router.pathname !== "/login" &&
      router.pathname !== "/sign_up" &&
      router.pathname !== "/404" &&
      router.pathname !== "/" &&
      router.pathname !== "/password_reset"
    );
  };

  return (
    <>
      {isNavbarNeeded() && <Navbar />}
      <div className="min-h-screen">
        <div className="p-6 lg:p-16 md:p-12">{children}</div>
      </div>
      <Footer />
    </>
  );
};
