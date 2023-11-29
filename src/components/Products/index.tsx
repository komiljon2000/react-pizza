import React from "react";
import m from "../../styles/Products.module.scss";
import products from "../../assets/JSON/pizzas.json";
import PizzaBlock from "../PizzaBlock";

interface Props {}

const Products: React.FC<Props> = (_props) => {
  return (
    <div className={m.products}>
      <div className={m.products_container}>
        <div className={m.products_wrapper}>
          <div className={m["products_name-wrapper"]}>
            <h1>Все пиццы</h1>
            <div className={m["product_items-wrapper"]}>
              {products?.map((pizza, index) => {
                return (
                  <PizzaBlock
                    key={index}
                    title={pizza.title}
                    img={pizza.imageUrl}
                    price={pizza.price}
                    sizes={pizza.sizes}
                    types={pizza.types}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
