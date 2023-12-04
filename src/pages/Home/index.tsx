import React, { useState } from "react";
import Products from "../../components/Products";
import Header from "../../components/Header";
interface Props {}

const Home: React.FC<Props> = (_props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Products />
    </>
  );
};

export default Home;
