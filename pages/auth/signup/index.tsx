import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Input } from "@/components/Input";
import { signUpDets } from "@/constants/data/authPages";
import styles from "../../../styles/userAuth.module.css";

const Signup = () => {
  const router = useRouter();

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
      <div className="flex flex-col justify-center mx-auto w-[50%] px-5">
        <div className="flex flex-col items-center py-3 gap-1">
          <p className="font-bold text-purple-200 text-center">
            Create an Account
          </p>
          <p className="text-m">
            Welcome to Mighty Finance. Create your account below.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <form>
            <div className="grid grid-cols-2 gap-4">
              {signUpDets.map((item, idx) => (
                <div key={idx} className="w-full py-1">
                  <Input
                    onTextChange={() => {
                      console.log("hi");
                    }}
                    htmlFor={item.htmlFor}
                    type={item.inputType}
                    label={item.label}
                    placeholder={item.placeholder}
                  />
                </div>
              ))}
            </div>
            <div className="w-full py-2"> </div>
            <button
              onClick={() => {
                void router.push("/dashboard");
              }}
              className="w-full py-2 text-center bg-purple-500 hover:bg-purple-primary rounded text-white font-bold"
            >
              Create account
            </button>
          </form>
          <small className="py-2 mx-auto w-1/3">
            Already have an account?{" "}
            <Link href={"/auth/sign-in"} className="text-yellow-400">
              Log In
            </Link>
          </small>
          <div className="pb-2">
            <div className="flex justify-between items-center pb-3">
              <span className={`${styles.gradDiv}`} />
              <p className="text-sm">or</p>
              <span className={`${styles.gradDiv}`} />
            </div>
            <div className="flex items-center justify-between gap-3 w-4/5 mx-auto">
              <div className="bg-[#FAF1FF] flex justify-center items-center gap-3 py-2 px-5 rounded cursor-pointer">
                <Image
                  src={"/Icons/google.png"}
                  alt="google-icon"
                  width={25}
                  height={25}
                />
                <p className="text-sm">Continue with Google</p>
              </div>
              <div className="bg-[#FAF1FF] flex justify-center items-center gap-3 py-2 px-5 rounded cursor-pointer">
                <Image
                  src={"/Icons/apple.png"}
                  alt="apple-icon"
                  width={25}
                  height={25}
                />
                <p className="text-sm">Continue with Apple</p>
              </div>
            </div>
            <div>
              <div className="pt-5">
                <label htmlFor="user-agreement" className="text-sm">
                  <input
                    className="w-4 h-4 text-[#CFD3D4]  
                          focus:ring-purple-200 focus:ring-2 mr-1"
                    type="checkbox"
                    id="user-agreement"
                  />
                  By creating an account, you agree to Mighty Finance Solution
                  <Link href={"#"} className="text-yellow-300">
                    {" "}
                    Terms of Services
                  </Link>{" "}
                  and{" "}
                  <Link href={"#"} className="text-yellow-300">
                    {" "}
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
