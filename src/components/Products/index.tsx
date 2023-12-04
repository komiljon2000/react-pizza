import React, { useEffect, useState } from "react";
import m from "../../styles/Products.module.scss";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";
import Categories from "../Categories";
import Sort from "../Sort";
import { pizzaTypes } from "../../types";

interface Props {}

const Products: React.FC<Props> = () => {
  const [items, setItems] = useState<pizzaTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [sortType, setSortType] = useState<{
    name: string;
    sortProperty: string;
  }>({
    name: "популярности(desc)",
    sortProperty: "rating",
  });

  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const sortBy = sortType.sortProperty.replace("-", "");
  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://65656be7eb8bb4b70ef18428.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data), setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  console.log(categoryId, sortType);

  const skeleton = [...new Array(8)].map((_, ind) => <Skeleton key={ind} />);

  const pizzas = items?.map((pizza, index) => {
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
  });

  return (
    <>
      <div className={m.categories}>
        <div className={m.categories_container}>
          <div className={m.categories_wrapper}>
            <Categories
              value={categoryId}
              onClickCategoryIdChange={(index: number) => setCategoryId(index)}
            />
            <Sort
              value={sortType}
              onClickSortIdChange={(sortTypeOfPizza: {
                name: string;
                sortProperty: string;
              }) => setSortType(sortTypeOfPizza)}
            />
          </div>
        </div>
      </div>
      <div className={m.products}>
        <div className={m.products_container}>
          <div className={m.products_wrapper}>
            <div className={m["products_name-wrapper"]}>
              <h1>Все пиццы</h1>
              <div className={m["product_items-wrapper"]}>
                {isLoading ? skeleton : pizzas}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
