import Image from "next/image";
import Step from "./step";
import { LoanStepsData } from "@/constants/data/landingPage";

const LoanSteps = () => {
  return (
    <section className="flex items-start w-full justify-between pb-12 pt-6 px-24 mx-auto gap-10">
      <div className="m-0">
        <Image
          src={"/Images/LandingPage/woman-checking-smartphone.png"}
          alt="woman-checking-smartphone"
          width={625}
          height={520}
        />
      </div>
      <div className="flex flex-col gap-3 pr-8">
        {LoanStepsData.map((item, idx) => {
          return <Step key={idx} {...item} />;
        })}
      </div>
    </section>
  );
};

export default LoanSteps;
