import { type AppLayoutProps } from "..";
import Meta from "../meta";
import LeftSidebar from "../left-sidebar";

const DashboardLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Meta />
      <section className="h-[100vh] w-full font-Montserrat p-0 m-0 grid grid-cols-[250px_1fr] grid-rows-[60px_1fr]">
        <div className="header col-[2_/_3] row-[1_/_2] border border-s "></div>
        <LeftSidebar />
        <div className="col-[_2/_3] row-[_2/_3]">{children}</div>
      </section>
    </>
  );
};

export default DashboardLayout;
