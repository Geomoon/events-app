import React, { FC } from "react";

type props = {
  children: React.ReactNode;
};

const Layout: FC<props> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-10 px-24 py-10">
      {children}
    </main>
  );
};

export default Layout;
