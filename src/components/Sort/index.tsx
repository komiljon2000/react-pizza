import React from "react";
import m from "../../styles/Sort.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import categories_dreopdown from "../../assets/images/dropdown.svg";

interface Props {}

const Sort: React.FC<Props> = (_props) => {
  const [activeSort, setActiveSort] = useState(0);
  const [activeSortId, setActiveSortId] = useState("популярности");
  const [openSorting, setOpenSorting] = useState(false);
  const sortTypes = ["популярности", "по цене", "по алфавиту"];

  function onClickActiveSort(i: number) {
    setActiveSort(i);
    setActiveSortId(sortTypes[i]);
  }

  return (
    <>
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
                  key={i}
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
    </>
  );
};

export default Sort;
