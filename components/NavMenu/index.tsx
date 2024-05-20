import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/data/navMenu";

const NavMenu = () => {
  return (
    <div className="py-4 px-8 flex justify-between items-center m-0 w-full font-Montserrat">
      <div className="logo p-0">
        <Link href={"/"}>
          <Image src="/Images/Logo.png" alt="logo" width={180} height={100} />
        </Link>
      </div>
      <div className="flex justify-between gap-4">
        {navLinks.map((item, idx) => (
          <Link
            className="hover:underline hover:decoration-4 hover:decoration-purple-primary"
            href={item.url}
            key={idx}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="px-8 py-3 text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
