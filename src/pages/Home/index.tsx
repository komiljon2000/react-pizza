import React from "react";
import Products from "../../components/Products";
import Header from "../../components/Header";
interface Props {}

const Home: React.FC<Props> = (_props) => {
  return (
    <>
      <Header />
      <Products />
    </>
  );
};

export default Home;
