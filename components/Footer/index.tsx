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
    <section className="font-Montserrat">
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
        <div className={`${styles.footerBorder} flex justify-between mx-auto`}>
          <div className="w-[370px] text-left">
            <Image src="/Images/Logo.png" alt="logo" width={368} height={80} />
            <p className="text-gray-500 font-medium w-4/5">
              We simplify access to loans, empowering you to achieve your goals.
            </p>
          </div>
          <div className={`${styles.footerGrad}`} />
          <div className="flex items-start justify between">
            {footerLinks.map((group, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start justify-start gap-2"
              >
                <p>{group.title}</p>
                {group.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.link}
                    className="font-normal text-base leading-normal"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            {footerContactLinks.map((item, idx) => (
              <div
                className="flex flex-col items-start justify-start gap-2"
                key={idx}
              >
                <Link className="flex justify-between" href={item.link}>
                  <Image src={item.icon} alt="icon" width={50} height={50} />
                  <p>{item.label}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span>© 2024 All rights reserved</span>
          <div>
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
