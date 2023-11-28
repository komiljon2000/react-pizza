import React from "react";
import m from "../../styles/Categories.module.scss";
import categories_dreopdown from "../../assets/images/dropdown.svg";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {}

const Categories: React.FC<Props> = (_props) => {
  const [activeInedex, setActiveInedex] = useState(0);
  const [openSorting, setOpenSorting] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [activeSort, setActiveSort] = useState(0);
  const [activeSortId, setActiveSortId] = useState("популярности");
  const controls = useAnimation();
  const sortTypes = ["популярности", "по цене", "по алфавиту"];

  function onClickActiveSort(i: number) {
    setActiveSort(i);
    setActiveSortId(sortTypes[i]);
  }

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

  const handleClick = (index: number) => {
    setOpenCategory(false); // Close dropdown when an item is clicked
    onClickCategory(index);
  };

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
                      activeInedex === index
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
                    onClick={() => handleClick(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={
                      m[
                        activeInedex === index
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
            <p className={m.media_d_none}>Сортировка по:</p>
            <span>{activeSortId}</span>

            {openSorting && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={m["categories_dropdown-popup"]}
              >
                {sortTypes?.map((sortType, i) => {
                  return (
                    <motion.p
                      onClick={() => onClickActiveSort(i)}
                      className={
                        m[activeSort === i ? "categories_dropdown-active" : ""]
                      }
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {sortType}
                    </motion.p>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
