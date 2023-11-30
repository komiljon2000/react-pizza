import React from "react";
import m from "../../styles/Categories.module.scss";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {
  value: number;
  onClickCategoryIdChange: any;
}

const Categories: React.FC<Props> = ({ value, onClickCategoryIdChange }) => {
  function onClickCategoryIdChanger(index: number) {
    onClickCategoryIdChange(index);
    setOpenCategory(false);
  }

  const [openCategory, setOpenCategory] = useState(false);
  const controls = useAnimation();

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  useEffect(() => {
    if (!openCategory) {
      controls.start("closed");
    } else {
      controls.start("open");
    }
  }, [openCategory, controls]);

  const dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.2, ease: "easeInOut" },
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.2, ease: "easeInOut" },
      },
    },
  };

  return (
    <>
      <div className={m["categorie_types-wrapper"]}>
        {categories?.map((categoryItem, index) => {
          return (
            <button
              key={index}
              onClick={() => onClickCategoryIdChange(index)}
              className={
                m[
                  value === index
                    ? "categorie_types-btn-active"
                    : "categorie_types-btn"
                ]
              }
            >
              {categoryItem}
            </button>
          );
        })}
      </div>

      <div className={m["main_media_categorie_types-wrapper"]}>
        <button
          onClick={() => setOpenCategory(!openCategory)}
          className={m.category_btn}
        >
          {categories[2]}
        </button>

        <motion.div
          variants={dropdownVariants}
          initial="closed"
          animate={controls}
          exit="closed"
          style={{ overflow: "hidden" }}
          className={m["media_categorie_types-wrapper"]}
        >
          {openCategory &&
            categories?.map((categoryItem: any, index: number) => (
              <motion.a
                key={index}
                onClick={() => onClickCategoryIdChanger(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={
                  m[
                    value === index
                      ? "media_categorie_types-btn-active"
                      : "media_categorie_types-btn"
                  ]
                }
              >
                {categoryItem}
              </motion.a>
            ))}
        </motion.div>
      </div>
    </>
  );
};

export default Categories;
