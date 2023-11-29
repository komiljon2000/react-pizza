import React, { useEffect, useState } from "react";
import m from "../../styles/Products.module.scss";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";
import { pizzaTypes } from "../../types";

interface Props {
  pizzatypes: pizzaTypes[];
}

const Products: React.FC<Props> = (_pizzatypes) => {
  const [items, setItems] = useState<pizzaTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://65656be7eb8bb4b70ef18428.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data), setIsLoading(false);
      });
  }, []);

  return (
    <div className={m.products}>
      <div className={m.products_container}>
        <div className={m.products_wrapper}>
          <div className={m["products_name-wrapper"]}>
            <h1>Все пиццы</h1>
            <div className={m["product_items-wrapper"]}>
              {isLoading
                ? [...new Array(8)].map((_, ind) => <Skeleton key={ind} />)
                : items?.map((pizza, index) => {
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
