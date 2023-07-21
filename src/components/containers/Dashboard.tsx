import { ReactNode } from "react";

import { Header } from "./Header";

export const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid justify-center gap-5">
      <Header body="Dashboard" />
      <div className="grid gap-5 2xl:grid-cols-5 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
};
