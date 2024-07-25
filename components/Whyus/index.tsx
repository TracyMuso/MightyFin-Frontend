import styles from "@/styles/landingPage.module.css";
import Button from "../Button";
import { WhyUsCardData } from "@/constants/data/landingPage";
import WhyUsCard from "../Cards/whyUs";

const Whyus = () => {
  return (
    <section className={`${styles.whyUs} flex items-center justify-between`}>
      <div className="text-content w-1/3 flex flex-col gap-5">
        <h2 className="font-extrabold text-4xl text-white leading-[56px]">
          Why <span className="text-yellow-300">Mightyfin </span>Stands Out
        </h2>
        <p className="text-white py-2">
          At Mighty Fin, we understand that access to funding is crucial. We're
          here to make the loan process fast, easy, and transparent.
        </p>
        <div className="w-2/5">
          <Button text="Apply now" variant="ghost" />
        </div>
      </div>
      <div className="mf-pros grid grid-rows-2 grid-cols-2 w-1/2 justify-center gap-5">
        {WhyUsCardData.map((item, idx) => (
          <WhyUsCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Whyus;
