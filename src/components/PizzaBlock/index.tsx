import React, { useState } from "react";
import m from "../../styles/PizzaBlock.module.scss";

interface Props {
  title: string;
  price: number;
  img: string;
  sizes: number[];
  types: number[];
}

const PizzaBlock: React.FC<Props> = ({ title, price, img, sizes, types }) => {
  const [addedNumber, setAddedNumber] = useState(0);
  const typeNames = ["тонкое", "традиционное"];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  function playMelody() {
    const audio = new Audio("../../../src/assets/voisec/metallic.mp3");
    audio.play();
    // const audio = new SpeechSynthesisUtterance("Ассаламу Алейкум");
    // window.speechSynthesis.speak(audio);
  }

  function voiceOpen() {
    setAddedNumber(addedNumber + 1);
    playMelody();
  }

  return (
    <div className={m.product_item}>
      <img src={img} alt="Pizza" className={m["product_item-img"]} />

      <div className={m["product_item-info-wrapper"]}>
        <div className={m["product_item-title-wrapper"]}>
          <p>{title}</p>
        </div>
        <div className={m["product_item-gray-info"]}>
          <div className={m["product_item-type-wrapper"]}>
            {types.map((typeId: number, i) => (
              <p
                onClick={() => setActiveType(i)}
                className={
                  m[activeType === i ? "product_item-type-active" : ""]
                }
              >
                {typeNames[typeId]}
              </p>
            ))}
          </div>
          <div className={m["product_item-size-wrapper"]}>
            {sizes?.map((size, i) => (
              <p
                onClick={() => setActiveSize(i)}
                className={
                  m[activeSize === i ? "product_item-size-active" : ""]
                }
              >
                {size} см.
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className={m["product_item-prices-wrapper"]}>
        <p>от {price} ₽</p>
        <button onClick={voiceOpen}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          <p>
            Добавить <span>{addedNumber}</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
