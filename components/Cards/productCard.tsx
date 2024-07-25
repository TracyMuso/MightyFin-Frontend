import Image from "next/image";
import Link from "next/link";
import type { ProductCardType } from "@/types";

const ProductCard = ({
  icon,
  title,
  text,
  productDetails,
}: ProductCardType) => {
  return (
    <div>
      <Image src={icon} alt="product-card-icon" width={30} height={30} />
      <h3>{title}</h3>
      <span>{text}</span>
      <Link href={productDetails}>
        <div>
          <span>see more</span>
          <Image
            src={"/Icons/yellow-arrow-right.png"}
            alt="yellow-arrow-white"
            width={50}
            height={50}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
