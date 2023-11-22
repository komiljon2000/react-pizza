import React from "react";
import Products from "../../components/Products";
import Categories from "../../components/Categories";
import Header from "../../components/Header";
interface Props {}

const Home: React.FC<Props> = (_props) => {
  return (
    <>
      <Header />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
