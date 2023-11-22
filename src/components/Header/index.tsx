import React from "react";
import m from "../../styles/Header.module.scss";
import header_logo from "../../assets/images/full_logo.svg";
import header_basket from "../../assets/images/basket_logo.svg";
import { Link } from "react-router-dom";

interface Props {}

const Header: React.FC<Props> = (_props) => {
  return (
    <>
      <div className={m.header}>
        <div className={m.header_container}>
          <div className={m.header_wrapper}>
            <Link className={m["header_logo-wrapper"]} to="/">
              <img src={header_logo} alt="React Pizza Logo" />
            </Link>

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
