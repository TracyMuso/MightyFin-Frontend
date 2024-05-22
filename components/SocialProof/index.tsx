import styles from "../../styles/socialProof.module.css";

const SocialProof = () => {
  return (
    <section className="font-Montserrat flex flex-col">
      <div className="flex justify-between gap-4 bg-yellow-300 h-[255px] w-full">
        <div className={`relative w-2/5`}>
          <div className={`${styles.rightText}`} />
          <div className="absolute top-[25%] left-[12%] border-left-2 pr-[63px]">
            <h3 className="font-700 font-extrabold text-3xl leading-14 text-left">
              Trusted By Thousands Real People, Real Results
            </h3>
          </div>
        </div>
        <div>
          <span>
            <p>3 years</p>
            <small>experience</small>
          </span>
          <span>
            <p>Over K 5M</p>
            <small>loan disbursed</small>
          </span>
          <span>
            <p>3.5 k </p>
            <small>registered users</small>
          </span>
        </div>
      </div>
      <div>
        <div>
          <h2>Empowering You with Strong Partnerships</h2>
          <p>
            We believe in collaboration and excellence. Discover our trusted
            partners and the awards recognizing our achievements.
          </p>
        </div>
        <div>icons</div>
      </div>
      <div>Leadership Recognition</div>
    </section>
  );
};

export default SocialProof;
