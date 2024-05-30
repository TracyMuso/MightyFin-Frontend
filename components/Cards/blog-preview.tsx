import Image from "next/image";
import { type BlogDataType } from "@/types";

const BlogPreview = ({ title, author, date, content }: BlogDataType) => {
  return (
    <div className="flex items-start p-4 justify-between">
      <Image
        src={"/Images/LandingPage/hand-writing.png"}
        alt="hand writing"
        width={365}
        height={350}
      />
      <div className="flex flex-col h-[345px] px-7 justify-between items-start">
        <article className="flex flex-col items-start text-left gap-5">
          <h4 className="font-bold">{title}</h4>
          <div className="flex w-full items-center justify-between">
            <p className="italic text-m font-light">By {author}</p>
            <p className="italic text-m font-light">{date}</p>
          </div>
          <p className="text-gray-400 leading-7 font-normal">{content}</p>
        </article>
        <button className="px-10 py-4 text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white">
          Read more
        </button>
      </div>
    </div>
  );
};

export default BlogPreview;
