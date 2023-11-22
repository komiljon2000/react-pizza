import React from "react";
import m from "../../styles/Categories.module.scss";
import categories_dreopdown from "../../assets/images/dropdown.svg";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {}

const Categories: React.FC<Props> = (_props) => {
  const [activeInedex, setActiveInedex] = useState(0);
  const [openSorting, setOpenSorting] = useState(false);
  const [activeSort, setActiveSort] = useState(0);

  const onClickCategory = (index: number) => {
    setActiveInedex(index);
  };

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className={m.categories}>
      <div className={m.categories_container}>
        <div className={m.categories_wrapper}>
          <div className={m["categorie_types-wrapper"]}>
            {categories?.map((categoryItem, index) => {
              return (
                <button
                  onClick={() => onClickCategory(index)}
                  className={
                    m[
                      activeInedex === index ? "categorie_types-btn-active" : ""
                    ]
                  }
                >
                  {categoryItem}
                </button>
              );
            })}
          </div>
          <div
            onClick={() => setOpenSorting(!openSorting)}
            className={m["sort_types-wrapper"]}
          >
            <img
              src={categories_dreopdown}
              className={
                m[
                  openSorting
                    ? "sort_types-wrapper-img"
                    : "sort_types-wrapper-img-down"
                ]
              }
              alt="Dropdown Icon"
            />
            <p>Сортировка по:</p>
            <span>популярности</span>
            {openSorting && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={m["categories_dropdown-popup"]}
              >
                <motion.p
                  onClick={() => setActiveSort(0)}
                  className={
                    m[activeSort === 0 ? "categories_dropdown-active" : ""]
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  популярности
                </motion.p>
                <motion.p
                  onClick={() => setActiveSort(1)}
                  className={
                    m[activeSort === 1 ? "categories_dropdown-active" : ""]
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  по цене
                </motion.p>
                <motion.p
                  onClick={() => setActiveSort(2)}
                  className={
                    m[activeSort === 2 ? "categories_dropdown-active" : ""]
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  по алфавиту
                </motion.p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
