import Image from "next/image";
import BlogPreview from "../Cards/blog-preview";
import MiniBlogCard from "../Cards/mini-blog-news-card";
import { BlogData, miniBlogCardData } from "@/constants/data/landingPage";

const BlogandNews = () => {
  return (
    <section className="flex flex-col items-center font-Montserrat px-16 py-24">
      <div className="flex justify-between items-center">
        <div>
          <article className="pb-10">
            <h2 className="text-2xl font-extrabold leading-9">
              Empower Your Future: Secure Your Civil Servant Loan Today
            </h2>
            <p className="py-2">
              Fast, flexible, and affordable financing solutions tailored for
              civil servants.
            </p>
            <p className="font-bold">Benefits:</p>
            <ul className="list-disc leading-6 list-inside pl-4">
              <li>
                Competitive rates: Enjoy interest rates designed to be
                budget-friendly for civil servants.
              </li>
              <li>
                Simplified process: Apply for your loan online in minutes, skip
                the hassle.
              </li>
              <li>
                Flexible repayment: Choose a plan that fits your monthly income
                and budget.
              </li>
              <li>
                Peace of mind: Focus on what matters, knowing your loan is
                secure.
              </li>
            </ul>
          </article>
          <div className="flex justify-between w-3/5 pl-5">
            <button className="px-10 py-4 text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white">
              Apply now
            </button>
            <button className="px-10 py-4 text-center hover:bg-yellow-400 border rounded-md text-black">
              Learn more
            </button>
          </div>
        </div>
        <div>
          <Image
            src={"/Images/LandingPage/man-with-phone.png"}
            alt="man holding phone"
            width={645}
            height={380}
          />
        </div>
      </div>
      <div className="flex justify-between py-12">
        <div className="flex flex-col w-3/5 gap-16">
          {BlogData.map((item, idx) => {
            return <BlogPreview key={idx} {...item} />;
          })}
        </div>
        <div>
          <div className="flex flex-col gap-3">
            {miniBlogCardData.map((item, idx) => {
              return <MiniBlogCard key={idx} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogandNews;
