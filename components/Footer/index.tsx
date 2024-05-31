import Image from "next/image";
import styles from "../../styles/landingPage.module.css";

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
    </section>
  );
};

export default Footer;
