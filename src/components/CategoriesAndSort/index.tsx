import React from "react";
import m from "../../styles/CategoriesAndSort.module.scss";
import Categories from "../Categories";
import Sort from "../Sort";

interface Props {}

const CategoriesAndSort: React.FC<Props> = (_props) => {
  return (
    <div className={m.categories}>
      <div className={m.categories_container}>
        <div className={m.categories_wrapper}>
          <Categories />
          <Sort />
        </div>
      </div>
    </div>
  );
};

export default CategoriesAndSort;
