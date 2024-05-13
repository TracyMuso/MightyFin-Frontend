import Image from "next/image";

const NavMenu: React.FC = () => {
  return (
    <div className="py-5 px-16 flex space-between w-full">
      <div className="logo p-0">
        <Image src="/Images/Logo.png" alt="logo" width={7} height={4} />
      </div>
    </div>
  );
};

export default NavMenu;
