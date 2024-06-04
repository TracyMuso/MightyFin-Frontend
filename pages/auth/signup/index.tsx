import Image from "next/image";
import { Input } from "@/components/Input";
import { signUpDets } from "@/constants/data/authPages";
import styles from "../../../styles/userAuth.module.css";

const Signup = () => {
  return (
    <section className="flex p-0 h-[100vh] font-Montserrat">
      <div className={`${styles.leftCont} relative`}>
        <div className="text-left absolute top-[34px] left-[35px]">
          <Image
            src={"/Icons/mf-logo.png"}
            width={89}
            height={59}
            alt="mighty finance logo"
          />
          <p className="text-white">Financial inclusion for all</p>
        </div>
        <div className="absolute top-[270px] left-7">
          <div
            className={`${styles.phoneNotification} flex justify-center rounded-md w-[207px] h-[70px] py-2 px-3 text-sm text-white`}
          >
            <p className="leading-6">
              Look out for the reminders so you pay on time
            </p>
          </div>
          <Image
            src={"/Icons/Polygon-2.png"}
            width={34}
            height={34}
            alt="small polygon"
            className="ml-auto"
          />
        </div>
        <div className="absolute top-[360px] left-72">
          <div
            className={`${styles.phoneNotification} flex justify-center rounded-md w-[207px] h-[70px] py-2 px-3 text-sm text-white`}
          >
            <p className="leading-6">
              Dear customer, your loan has been approved!
            </p>
          </div>
          <Image
            src={"/Icons/Polygon-2.png"}
            width={34}
            height={34}
            alt="small polygon"
          />
        </div>
      </div>
      <div className="flex flex-col mx-auto w-1/2">
        <div className="flex flex-col items-center py-3 gap-1">
          <p className="font-bold text-purple-200 text-center">
            Create an Account
          </p>
          <p className="text-m">
            Welcome to Mighty Finance. Create your account below.
          </p>
        </div>
        <div>
          <form>
            <div className="grid grid-cols-2 gap-4">
              {signUpDets.map((item, idx) => (
                <div key={idx} className="w-full">
                  <label htmlFor={item.htmlFor} className="font-bold text-m">
                    {item.label}
                  </label>
                  <Input type={item.inputType} placeholder="" id={item.id} />
                </div>
              ))}
            </div>
            <div>
              <label>Stay signed in</label>
              <input type="checkbox" placeholder="" />
            </div>
            <button>Create account</button>
          </form>
          <div>
            <div>
              <span />
              <p>or</p>
              <span />
            </div>
            <div>
              <div className="bg-[#FAF1FF]">
                <Image
                  src={"/Icons/google.png"}
                  alt="google-icon"
                  width={35}
                  height={35}
                />
                <p>Continue with Google</p>
              </div>
              <div className="bg-[#FAF1FF]">
                <Image
                  src={"/Icons/apple.png"}
                  alt="apple-icon"
                  width={35}
                  height={35}
                />
                <p>Continue with Apple</p>
              </div>
            </div>
            <div>
              <small>
                Already have an account? <span>Log In</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
