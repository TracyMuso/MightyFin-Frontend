import Image from "next/image";
import { type AppLayoutProps } from "..";
import Meta from "../meta";
import styles from "../../../styles/leftSidebar.module.css";
import { LeftSidebarData } from "@/constants/data/dashboard";

const DashboardLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Meta />
      <section className="h-[100vh] w-full font-Montserrat p-0 m-0 grid grid-cols-[250px_1fr] grid-rows-[60px_1fr]">
        <div className="header col-[2_/_3] row-[1_/_2] border border-s "></div>
        <div className={`${styles.mainContainer} col-[_1/_2] row-span-2`}>
          {LeftSidebarData.map((item, idx) => (
            <div key={idx}>
              <div onClick={item.onClick}>
                <Image src={item.icon} alt={item.alt} width={25} height={25} />
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-[_2/_3] row-[_2/_3]">{children}</div>
      </section>
    </>
  );
};

export default DashboardLayout;
