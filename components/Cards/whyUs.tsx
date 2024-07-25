import Image from "next/image";
import { WhyUsCardType } from "@/types";

const WhyUsCard = ({ title, icon, text }: WhyUsCardType) => {
  return (
    <div>
      <Image src={icon} width={30} height={30} alt="card-icon" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default WhyUsCard;
