import Image from "next/image";
import Link from "next/link";
import BlogPreview from "../Cards/blog-preview";
import MiniBlogCard from "../Cards/mini-blog-news-card";
import {
  BlogData,
  miniBlogCardData,
  BlogCategoriesData,
} from "@/constants/data/landingPage";

const BlogandNews = () => {
  return (
    <section className="flex flex-col items-center font-Montserrat px-16 py-12">
      <div className="mx-auto text-center text-purple-500 pb-2">
        <h1 className="font-extrabold text-3xl py-2">Mightyfin Blog</h1>
        <p className="text-xl">Your resource for financial wellness</p>
      </div>
      <div className="py-6">
        <div className="flex w-full justify-between">
          {BlogData.map((item, idx) => {
            return <BlogPreview key={idx} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogandNews;
