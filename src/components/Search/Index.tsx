import React from "react";
import m from "../../styles/Search.module.scss";
import { TbSearch } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<Props> = ({ searchValue, setSearchValue }) => {
  return (
    <div className={m.search}>
      <TbSearch className={m.search_icon} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        placeholder="Search"
        className={m["input-group__input"]}
      />
      {searchValue && (
        <IoClose onClick={() => setSearchValue("")} className={m.clear_icon} />
      )}
    </div>
  );
};

export default Search;
