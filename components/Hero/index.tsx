import Image from "next/image";
import styles from "../../styles/landingPage.module.css";
import Point from "./point";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="container flex items-center justify-between h-[85vh] px-6 font-Montserrat">
      <div className="main-text text-left w-3/5 pb-12 pl-12">
        <article className="py-12 gap-2">
          <span className="text-3xl">Need a loan?</span>
          <h1 className="text-4xl font-extrabold leading-12 pb-8 pt-6 text-purple-400">
            Fast & <span className="text-yellow-300">Easy </span>Loans Apply in
            Minutes
          </h1>
          <p className="w-4/5 text-gray-400 text-xl">
            We simplify the loan process, so you can focus on your goals
          </p>
        </article>
        <div className="w-2/5">
          <Button text="Apply now!" variant="primary" />
        </div>
      </div>
      <div className={`relative`}>
        <Image
          src={"/Images/LandingPage/hero-img.png"}
          width={540}
          height={392}
          alt="smiling-woman-scrolling-on-phone"
        />
        <div className="absolute top-[170px] right-[7px]">
          <Point title="How much do you need?" text="apply now" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
