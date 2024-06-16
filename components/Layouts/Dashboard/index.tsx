import { type AppLayoutProps } from "..";
import Image from "next/image";
import Meta from "../meta";
import styles from "../../../styles/leftSidebar.module.css";
import LeftSidebar from "../left-sidebar";

const DashboardLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Meta />
      <section className="h-[100vh] w-full font-Montserrat p-0 m-0 grid grid-cols-[250px_1fr] grid-rows-[60px_1fr]">
        <div className="header col-[2_/_3] row-[1_/_2] flex justify-between items-center border-b border-s">
          <h3 className="font-bold text-purple-500 pl-5">Welcome Lute</h3>
          <div className="flex items-center gap-6 pr-5">
            <span className="bg-yellow-300 p-2 rounded-[50%] cursor-pointer">
              <Image
                src={"/Icons/Notifications.png"}
                width={22}
                height={22}
                alt="notification bell"
              />
            </span>
            <span className="cursor-pointer w-10 h-10 bg-purple-500 text-white font-bold rounded-[50%] p-2 flex justify-center">
              <p>LC</p>
            </span>
          </div>
        </div>
        <div className={`${styles.mainContainer} gap-8 col-[_1/_2] row-span-2`}>
          <div className="flex justify-center py-12">
            <Image
              src={"/Icons/mf-logo.png"}
              height={40}
              width={60}
              alt="mighty-fin logo"
            />
          </div>
          <LeftSidebar />
        </div>
        <div className="col-[_2/_3] row-[_2/_3]">{children}</div>
      </section>
    </>
  );
};

export default DashboardLayout;
