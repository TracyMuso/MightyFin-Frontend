import Image from "next/image";
import { LeftSidebarData } from "@/constants/data/dashboard";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col items-start gap-9">
      {LeftSidebarData.map((item, idx) => (
        <div
          className="flex justify-center gap-4 pl-5 items-center hover:font-bold cursor-pointer"
          key={idx}
          onClick={item.onClick}
          id={item.title}
        >
          <Image src={item.icon} alt={item.alt} width={25} height={25} />
          <span className="text-white">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;
