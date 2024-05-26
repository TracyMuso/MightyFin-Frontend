import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[87vh] px-6 font-Montserrat">
      <div className="absolute main-text text-left left-[5%] top-[5%] w-1/2">
        <article className="py-8">
          <h1 className="text-4xl font-extrabold leading-12 pb-12 pt-6">
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
        <div>
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
        <button></button>
      </div>
      <div className="img-hover absolute w-1/2 h-[503px] border border-red right-[4%] top-[4%] "></div>
    </section>
  );
};

export default Hero;
