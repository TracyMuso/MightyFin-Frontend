import Image from "next/image";
import { type BlogDataType } from "@/types";

const BlogPreview = ({ title, author, date, content }: BlogDataType) => {
  return (
    <div className="flex items-center p-4">
      <Image
        src={"/Images/LandingPage/hand-writing.png"}
        alt="hand writing"
        width={365}
        height={350}
      />
      <div>
        <article>
          <h4>{title}</h4>
          <div>
            <p>{author}</p>
            <p>{date}</p>
          </div>
          <p>{content}</p>
        </article>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default BlogPreview;
