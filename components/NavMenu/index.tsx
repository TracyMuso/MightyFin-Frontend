import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "@/constants/data/navMenu";

const NavMenu = () => {
  const router = useRouter();
  return (
    <div className="py-4 px-9 flex border-gray-50 border-b-2 justify-between items-center m-0 w-full font-Montserrat">
      <div className="logo p-0">
        <Link href={"/"}>
          <Image src="/Images/Logo.png" alt="logo" width={225} height={100} />
        </Link>
      </div>
      <div className="nav-items flex justify-between gap-2 py-4 px-6 rounded-[50px]">
        {navLinks.map((item, idx) => (
          <Link
            className={`${router.pathname == item.url ? "nav-item-active" : ""} px-4 py-2 rounded-[50px]`}
            href={item.url}
            key={idx}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            void router.push("/auth/signup");
          }}
          className="px-8 py-3 text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white font-bold"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavMenu;
