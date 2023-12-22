import React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  return <main className="bg-gray-50 text-black dark:bg-gray-700 dark:text-white">{children}</main>;
}
