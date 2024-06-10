import Image from "next/image";
import styles from "../../styles/leftSidebar.module.css";
import { LeftSidebarData } from "@/constants/data/dashboard";

const LeftSidebar = () => {
  return (
    <div className={`${styles.mainContainer} w-[280px] px-[10px] h-[100vh]`}>
      {LeftSidebarData.map((item, idx) => (
        <div key={idx}>
          <div onClick={item.onClick}>
            <Image src={item.icon} alt={item.alt} width={25} height={25} />
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;
