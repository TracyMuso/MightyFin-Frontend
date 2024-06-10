import { type ReactNode } from "react";
import Meta from "./meta";

export interface AppLayoutProps {
  children: ReactNode;
  additionalClass?: string;
}

export const AppLayout = ({
  children,
  additionalClass = "",
}: AppLayoutProps) => {
  return (
    <>
      <Meta />
      <div>{children}</div>
    </>
  );
};

export default AppLayout;
