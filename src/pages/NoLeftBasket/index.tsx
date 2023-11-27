import React from "react";
import m from "../../styles/NoLeftBasket.module.scss";
import header_logo from "../../assets/images/full_logo.svg";
import { Link } from "react-router-dom";
import sad_emoji from "../../assets/images/sad_logo.svg";
import no_pizzas from "../../assets/images/shopping_man.svg";

interface Props {}

const NoLeftBasket: React.FC<Props> = (_props) => {
  return (
    <>
      <div className={m.header}>
        <div className={m.header_container}>
          <div className={m.header_wrapper}>
            <Link className={m["header_logo-wrapper"]} to="/">
              <img
                className={m.header_img}
                src={header_logo}
                alt="React Pizza Logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={m["no_pizzas-found"]}>
        <h1>
          Корзина пустая <img src={sad_emoji} alt="Sad Emoji" />
        </h1>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы
          заказать пиццу, перейди на главную страницу.
        </p>
        <img src={no_pizzas} alt="Shopping Man" />
        <button>Вернуться назад</button>
      </div>
    </>
  );
};

export default NoLeftBasket;
