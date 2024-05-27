import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="flex justify-between items-center py-28 px-24 gap-8">
      <div className="w-1/2">
        <Image
          src={"/Images/LandingPage/GroupPicture.png"}
          alt="who we are"
          width={473}
          height={450}
        />
      </div>
      <div className="flex flex-col text-left w-1/2 h-[450px] justify-between font-Montserrat">
        <div>
          <Image
            src={"/Images/LandingPage/wwa.png"}
            alt="group frame"
            width={323}
            height={80}
          />
        </div>
        <span className="text-gray-400">
          We simplify access to loans, empowering you to achieve your goals.
        </span>
        <p className="leading-8">
          At Mighty Fin, we believe everyone deserves access to convenient and
          flexible financing solutions. We leverage technology to create a
          seamless loan application process, with competitive rates and
          transparent terms.
        </p>
        <button className="px-12 py-4 w-1/2 text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
