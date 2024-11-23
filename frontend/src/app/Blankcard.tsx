import { Children, ReactChildren, ReactElement, ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Blankcard({ children }: Props) {
  return (
    <div className="h-screen shrink p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
}
