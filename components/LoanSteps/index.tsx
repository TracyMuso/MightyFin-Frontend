import Image from "next/image";
import Step from "./step";
import { LoanStepsData } from "@/constants/data/landingPage";

const LoanSteps = () => {
  return (
    <section className="flex flex-col w-full py-16 px-24 items-center">
      <div className="flex flex-col items-center w-4/5 pb-10">
        <h1 className="text-4xl font-extrabold text-purple-500">
          How it works
        </h1>
        <p className="text-purple-400 text-xl">
          Simple Steps to Begin Your Journey. Completed in a few Minutes!
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="m-0">
          <Image
            src={
              "/Images/LandingPage/woman-checking-her-smartphone-notifications-1.png"
            }
            alt="woman-checking-smartphone"
            width={500}
            height={550}
          />
        </div>
        <div className="flex flex-col gap-3 pr-8">
          {LoanStepsData.map((item, idx) => {
            return <Step key={idx} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default LoanSteps;
