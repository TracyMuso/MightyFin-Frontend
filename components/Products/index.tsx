import ProductCard from "../Cards/productCard";

const Products = () => {
  return (
    <section className="flex flex-col px-12 py-8">
      <h1>Our Products</h1>
      <p>Fast & Easy Loan Application: Done in Minutes</p>
      <div className="product-card-row flex items center justify-between w-4/5 h-[">
        <ProductCard
          icon="/Icons/Personal-Loan.png"
          text="Personal Loans for Civil Servants, MOU Employees & Secured Options"
          title="Personal"
          productDetails="#"
        />
      </div>
    </section>
  );
};

export default Products;
