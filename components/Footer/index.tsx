import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/landingPage.module.css";
import {
  footerLinks,
  footerSocialLinks,
  footerContactLinks,
} from "@/constants/data/footerLinks";

const Footer = () => {
  return (
    <section className="font-Montserrat pt-16">
      <div className={`${styles.footerCTAContainer} flex justify-center`}>
        <div className={`${styles.footerCtaMain} flex justify-between`}>
          <div className="p-6 w-2/3">
            <h2 className="text-3xl leading-[2.5rem] font-extrabold pb-4">
              Embrace A Brighter Financial Future With
              <span className="text-yellow-300"> Mighty Fin </span>
              Starting Today!
            </h2>
            <h4 className="font-bold text-xl pb-8">
              Financial Solutions at Your Fingertips: Secure Loans, Manage
              Accounts
            </h4>
            <button className="px-12 py-4 w-1/2 text-center bg-purple-500 hover:bg-purple-primary rounded-3xl text-white font-bold">
              Apply Now!
            </button>
          </div>
          <div>
            <Image
              src={"/Images/LandingPage/happy-woman.png"}
              alt="happy black woman"
              width={600}
              height={480}
            />
          </div>
        </div>
      </div>
      <footer className="flex flex-col">
        <div
          className={`${styles.footerBorder} flex justify-between mx-auto pb-8`}
        >
          <div className="w-[370px] text-left">
            <Image src="/Images/Logo.png" alt="logo" width={368} height={80} />
            <p className="text-gray-500 font-medium w-4/5 py-3">
              We simplify access to loans, empowering you to achieve your goals.
            </p>
          </div>
          <div className={`${styles.footerGrad}`} />
          <div className="flex items-start justify-between w-3/5">
            {footerLinks.map((group, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start justify-start gap-4"
              >
                <Link
                  href={group.titleLink}
                  className="font-normal text-m leading-normal"
                >
                  {group.title}
                </Link>
                {group.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.link}
                    className="font-normal text-m leading-normal"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col items-start justify-start gap-4 w-2/5">
              {footerContactLinks.map((item, idx) => (
                <Link
                  key={idx}
                  className="flex justify-between"
                  href={item.link}
                >
                  <span className="flex justify-between gap-4">
                    <Image src={item.icon} alt="icon" width={25} height={25} />
                    <p className="text-m">{item.label}</p>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-8 w-[90%] mx-auto">
          <span className="text-gray-400">
            © 2024 All rights reserved | Mighty finance
          </span>
          <div className="flex items-center justify-between w-1/5">
            {footerSocialLinks.map((item, idx) => (
              <Image
                key={idx}
                src={item.icon}
                alt={item.label}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
