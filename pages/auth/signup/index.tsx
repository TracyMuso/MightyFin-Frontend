import Image from "next/image";
import { Input } from "@/components/Input";
import styles from "../../../styles/userAuth.module.css";

const Signup = () => {
  return (
    <section className="flex">
      <div className={`${styles.leftCont} relative w-1/2 h-[100vh]`}>
        <div>
          <Image
            src={"/Icons/mf-logo.png"}
            width={89}
            height={59}
            alt="mighty finance logo"
          />
          <p>Financial inclusion for all</p>
        </div>
        <div>
          <div>Look out for the reminders so you pay on time</div>
          <Image
            src={"/Icons/Polygon-2.png"}
            width={34}
            height={34}
            alt="small polygon"
          />
        </div>
        <div>
          <div>Dear customer, your loan has been approved!</div>
          <Image
            src={"/Icons/Polygon-2.png"}
            width={34}
            height={34}
            alt="small polygon"
          />
        </div>
      </div>
      <div>
        <div>
          <p>Create an Account</p>
          <p>Welcome to Mighty Finance. Create your account below.</p>
        </div>
        <div>
          <form>
            <div>
              <div>
                <label>First Name</label>
                <Input type="text" placeholder="" />
              </div>
              <div>
                <label>Last Name</label>
                <Input type="text" placeholder="" />
              </div>
            </div>
            <div>
              <label>Email Address</label>
              <Input type="text" placeholder="" />
            </div>
            <div>
              <label>Phone Number</label>
              <Input type="text" placeholder="" />
            </div>
            <div>
              <label>Password</label>
              <Input type="text" placeholder="" />
            </div>
            <div>
              <label>Stay signed in</label>
              <Input type="text" placeholder="" />
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
