import Image from "next/image";
import { type LoanStepDataType } from "@/types";
import styles from "../../styles/landingPage.module.css";

const Step = ({ step, icon, title, text }: LoanStepDataType) => {
  return (
    <div>
      <div>
        <div>{step}</div>
        <Image
          src={"/Images/LandingPage/dotted-arrow.png"}
          alt="step arrow"
          width={5}
          height={80}
        />
      </div>
      <div>
        <div>
          <span className={`${styles.stepGrad}`} />
          <Image src={icon} alt="step icon" width={50} height={50} />
        </div>
        <div>
          <span>{title}</span>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Step;
