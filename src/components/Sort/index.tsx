import React from "react";
import m from "../../styles/Sort.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import categories_dreopdown from "../../assets/images/dropdown.svg";

interface SortType {
  name: string;
  sortProperty: string;
}

interface Props {
  value: object;
  onClickSortIdChange: any;
}

interface valueNameType {
  name: string;
}

interface YourValueType {
  sortProperty: string;
}

const Sort: React.FC<Props> = ({ value, onClickSortIdChange }) => {
  const [openSorting, setOpenSorting] = useState(false);
  const sortTypes: SortType[] = [
    { name: "популярности", sortProperty: "rating" },
    { name: "по цене", sortProperty: "price" },
    { name: "по алфавиту", sortProperty: "title" },
  ];

  function onClickSortIdChanger(obj: object) {
    onClickSortIdChange(obj);
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
        <span>{(value as valueNameType).name}</span>

        {openSorting && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={m["categories_dropdown-popup"]}
          >
            {sortTypes?.map((obj, i) => (
              <motion.p
                key={i}
                onClick={() => onClickSortIdChanger(obj)}
                className={
                  (value as YourValueType)?.sortProperty === obj.sortProperty
                    ? m["categories_dropdown-active"]
                    : ""
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {obj.name}
              </motion.p>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Sort;
