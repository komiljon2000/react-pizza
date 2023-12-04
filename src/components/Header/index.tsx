import React from "react";
import m from "../../styles/Header.module.scss";
import header_logo from "../../assets/images/full_logo.svg";
import header_basket from "../../assets/images/basket_logo.svg";
import logo_itself from "../../assets/images/logo_itself.svg";
import { Link } from "react-router-dom";
import Search from "../Search/Index";

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Props> = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className={m.header}>
        <div className={m.header_container}>
          <div className={m.header_wrapper}>
            <Link className={m["header_logo-wrapper"]} to="/">
              <img
                className={m.header_logo}
                src={header_logo}
                alt="React Pizza Logo"
              />
              <img
                className={m["header_media-logo"]}
                src={logo_itself}
                alt="React Pizza Logo"
              />
            </Link>

            <Search searchValue={searchValue} setSearchValue={setSearchValue} />

            <Link className={m["header_basket-wrapper"]} to="/basket">
              <button className={m["header_basket-btn"]}>
                <div className={m["header_basket-btn-left"]}>
                  <span>520 ₽</span>
                </div>
                <hr />
                <div className={m["header_basket-btn-rigt"]}>
                  <img src={header_basket} alt="" />
                  <span>3</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
