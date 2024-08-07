import ProductCard from "../Cards/productCard";
import { ProductCardData } from "@/constants/data/landingPage";

const Products = () => {
  return (
    <section className="flex flex-col gap-5 items-center h-[100vh] bg-[#FBECFF] px-6 py-8">
      <div className="text-purple-500 flex flex-col items-center pt-5 gap-2 pb-8">
        <h1 className="font-extrabold text-3xl">Our Products</h1>
        <p className="text-xl ">
          Fast & Easy Loan Application: Done in Minutes
        </p>
      </div>
      <div className="product-card-row flex items center justify-between w-4/5">
        {ProductCardData.map((item, idx) => (
          <ProductCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Products;
