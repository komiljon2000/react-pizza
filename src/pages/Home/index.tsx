import React from "react";
import Products from "../../components/Products";
import Header from "../../components/Header";
import CategoriesAndSort from "../../components/CategoriesAndSort";
interface Props {}

const Home: React.FC<Props> = (_props) => {
  return (
    <>
      <Header />
      <CategoriesAndSort />
      <Products pizzatype={[]} />
    </>
  );
};

export default Home;
