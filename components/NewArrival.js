import React, { useState } from "react";
import ProductImage from "./ProductImage";

const filters = [
  { label: "all", filter: "*" },
  { label: "foodie", filter: ".mens" },
  { label: "fruits", filter: ".womens" },
  { label: "healthy", filter: ".baby" },
];

const products = [
  {
    img: "/images/in8.png",
    name: "Organic Vegitable",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "chairs furnitures mens",
  },
  {
    img: "/images/in7.png",
    name: "Organic Strawberry",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "furnitures Lighting chairs womens",
  },
  {
    img: "/images/in6.png",
    name: "Washed Sugar Snap",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "chairs Lighting furnitures baby",
  },
  {
    img: "/images/in5.png",
    name: "Organic Broccoli",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "chairs decor mens",
  },
  {
    img: "/images/in1.png",
    name: "Organic Sweet Corn",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "chairs decor womens",
  },
  {
    img: "/images/in2.png",
    name: "Native Organic Papaya",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "Lighting furnitures baby",
  },
  {
    img: "/images/in3.png",
    name: "Green Seedless Grapes",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "Lighting furnitures womens",
  },
  {
    img: "/images/in4.png",
    name: "Organic Grapes",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "chairs decor mens",
  },
  {
    img: "/images/in9.png",
    name: "Cauliflower",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "chairs womens",
  },
  {
    img: "/images/in10.png",
    name: "Nido",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "furnitures baby",
  },
  {
    img: "/images/in13.png",
    name: "Butter",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "chairs furnitures decor womens",
  },
  {
    img: "/images/in14.png",
    name: "Yellow Vegitable",
    price: 60,
    oldPrice: 100,
    discount: "10% Off",
    rating: 5,
    filter: "furnitures mens",
  },
];

const getFilterClass = (active, filter) =>
  active === filter ? "gallery-active" : "";

const matchesFilter = (prod, active) => {
  if (active === "*") return true;
  // filter is like ".mens"; prod.filter is a space-separated string
  const filterClass = active.replace(".", "");
  return prod.filter.split(" ").includes(filterClass);
};

const NewArrival = () => {
  const [active, setActive] = useState("*");

  return (
    <section className="e-newarivles-wrap e-newarivles-fur e-gallery">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="e-heading-wrap e-heading-s2 mb-38">
              <p className="e-heading-subtitle">NEW PRODUCTS</p>
              <h2 className="e-heading-title">Top Savers Today 20% OFF</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-end">
            <div className="gallery-nav text-center">
              <ul>
                {filters.map((f) => (
                  <li key={f.label}>
                    <a
                      data-filter={f.filter}
                      className={getFilterClass(active, f.filter)}
                      onClick={() => setActive(f.filter)}
                      style={{ cursor: "pointer" }}
                    >
                      {f.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="new-arrivals-galry text-center">
              <div className="gallery-container">
                <div className="gallery-grid">
                  {products
                    .filter((prod) => matchesFilter(prod, active))
                    .map((prod, idx) => (
                      <ProductImage key={idx} {...prod} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;