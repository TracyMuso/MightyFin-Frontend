import Image from "next/image";
import { PartnershipData, LeadershipData } from "@/constants/data/landingPage";
import styles from "../../styles/landingPage.module.css";

const SocialProof = () => {
  return (
    <section className="font-Montserrat flex flex-col bg-[#FBECFF]">
      <div className="flex gap-2 justify-between items-center w-11/12 px-4 pt-6 pb-12 mx-auto">
        <p className="w-2/5 text-gray-500">
          Mightyfin is a regulated financial services provider. We are proudly
          associated with:
        </p>
        <div className="flex justify-around w-1/2 items-center">
          {PartnershipData.map((item, idx) => {
            return (
              <div key={idx}>
                <Image src={item.url} alt={item.alt} width={113} height={95} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
