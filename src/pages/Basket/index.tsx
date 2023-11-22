import React from "react";
import m from "../../styles/Basket.module.scss";
import { Link } from "react-router-dom";
import header_logo from "../../assets/images/full_logo.svg";
import pizza_one from "../../assets/images/pizza1.svg";
import pizza_two from "../../assets/images/pizza2.svg";
import pizza_three from "../../assets/images/pizza3.svg";
import basket_icon from "../../assets/images/basket_gray.svg";
import delete_icon from "../../assets/images/delete_gray.svg";
import delete_icon_circle from "../../assets/images/circle_delete_gray.svg";
import minus_icon from "../../assets/images/minus_icon.svg";
import plus_icon from "../../assets/images/plus_icon.svg";
import back_icon from "../../assets/images/back_icon.svg";

interface Props {}

const Basket: React.FC<Props> = (_props) => {
  return (
    <>
      <div className={m.header}>
        <div className={m.header_container}>
          <div className={m.header_wrapper}>
            <Link className={m["header_logo-wrapper"]} to="/">
              <img src={header_logo} alt="React Pizza Logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className={m.basket}>
        <div className={m.basket_container}>
          <div className={m.basket_wrapper}>
            <div className={m["basket_top-nav"]}>
              <div className={m["basket_top-left"]}>
                <img src={basket_icon} alt="Basket Icon" />
                <p>Корзина</p>
              </div>
              <div className={m["basket_top-right"]}>
                <img src={delete_icon} alt="Trash Icon" />
                <p>Очистить корзину</p>
              </div>
            </div>
            <div className={m.horizontal_line}></div>
            <div className={m["basket_added-pizzas"]}>
              <div className={m["basket_added-pizza-item"]}>
                <div className={m["basket_pizza-info"]}>
                  <img src={pizza_one} alt="First Pizza" />
                  <div className={m["basket_pizza-info-titles"]}>
                    <h2>Сырный цыпленок</h2>
                    <p>тонкое тесто, 26 см.</p>
                  </div>
                </div>
                <div className={m["basket_pizza-adder"]}>
                  <img src={minus_icon} alt="Minus Icon" />
                  <p>2</p>
                  <img src={plus_icon} alt="Plus Icon" />
                </div>
                <div className={m["basket_pizza-price"]}>
                  <h2>770 ₽ </h2>
                </div>
                <div className={m["basket_pizza-deleter"]}>
                  <img src={delete_icon_circle} alt="Delet Circle Icon" />
                </div>
              </div>
              <div className={m["basket_added-pizza-item"]}>
                <div className={m["basket_pizza-info"]}>
                  <img src={pizza_two} alt="First Pizza" />
                  <div className={m["basket_pizza-info-titles"]}>
                    <h2>Сырный цыпленок</h2>
                    <p>тонкое тесто, 26 см.</p>
                  </div>
                </div>
                <div className={m["basket_pizza-adder"]}>
                  <img src={minus_icon} alt="Minus Icon" />
                  <p>2</p>
                  <img src={plus_icon} alt="Plus Icon" />
                </div>
                <div className={m["basket_pizza-price"]}>
                  <h2>770 ₽ </h2>
                </div>
                <div className={m["basket_pizza-deleter"]}>
                  <img src={delete_icon_circle} alt="Delet Circle Icon" />
                </div>
              </div>
              <div className={m["basket_added-pizza-item"]}>
                <div className={m["basket_pizza-info"]}>
                  <img src={pizza_three} alt="First Pizza" />
                  <div className={m["basket_pizza-info-titles"]}>
                    <h2>Сырный цыпленок</h2>
                    <p>тонкое тесто, 26 см.</p>
                  </div>
                </div>
                <div className={m["basket_pizza-adder"]}>
                  <img src={minus_icon} alt="Minus Icon" />
                  <p>2</p>
                  <img src={plus_icon} alt="Plus Icon" />
                </div>
                <div className={m["basket_pizza-price"]}>
                  <h2>770 ₽ </h2>
                </div>
                <div className={m["basket_pizza-deleter"]}>
                  <img src={delete_icon_circle} alt="Delet Circle Icon" />
                </div>
              </div>
            </div>
            <div className={m["basket_bottom-counter"]}>
              <p>
                Всего пицц: <strong>3 шт.</strong>
              </p>
              <p>
                Сумма заказа:{" "}
                <strong className={m["basket_bottom-price-strong"]}>
                  900 ₽
                </strong>
              </p>
            </div>
            <div className={m["basket_bottom-btn"]}>
              <button className={m["basket_bottom-back-btn"]}>
                <img src={back_icon} alt="" />
                <p>Вернуться назад</p>
              </button>
              <button className={m["basket_bottom-buy-btn"]}>
                <p>Оплатить сейчас</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
