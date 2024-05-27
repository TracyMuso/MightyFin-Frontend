import Image from "next/image";
import styles from "../../styles/landingPage.module.css";
import Point from "./point";

const Hero = () => {
  return (
    <section className="relative h-[100vh] px-6 font-Montserrat">
      <div className="absolute main-text text-left left-[5%] top-[5%] w-3/5 pb-12">
        <article className="py-12">
          <h1 className="text-4xl font-extrabold leading-12 pb-8 pt-6">
            <span className="text-yellow-300">Empower </span>Your Future with
            Streamlined Loan Options
          </h1>
          <p className="w-4/5 text-gray-400">
            We are a financial technology company offering convenient and
            accessible loan solutions. We provide secure and personalized loan
            options to help you achieve your goals. Simplifying access to
            finance. We make it easy to apply, manage, and repay your loans
            online, anytime, anywhere.
          </p>
        </article>
        <div className="pb-6">
          <Image
            src={"/Images/LandingPage/UserImages.png"}
            alt="user images"
            width={220}
            height={60}
          />
          <span className="text-purple-500 font-extrabold py-6 text-xl">
            Over 3.5k active users
          </span>
        </div>
        <button className="px-12 py-4 w-1/2 text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white font-bold">
          Get started!
        </button>
      </div>
      <div
        className={`${styles.heroImage} absolute w-[630px] h-[553px] right-[4%] top-[4%]`}
      >
        <div className="absolute w-11/12 right-[10%] top-[5%] h-[530px]">
          <div className="rounded-md px-5 py-3 w-[365px] h-[75px] absolute left-[49%]">
            <Point
              title="100% Secure"
              text="Your data and funds are protected."
            />
          </div>
          <div className="rounded-md px-5 py-3 absolute w-[370px] top-[45%] left-[55%]">
            <Point
              title="Fast & Easy Applications"
              text="Apply for loans online in minutes"
            />
          </div>
          <div className="rounded-md px-5 py-3 w-[390px] absolute top-[73%] right-[50%]">
            <Point
              title="Transparent Terms"
              text="No hidden fees, clear communication"
            />
          </div>
          <div className="rounded-md px-5 py-3 absolute w-[300px] top-[87%] left-[60%]">
            <Point title="24/7" text="Account Management" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
