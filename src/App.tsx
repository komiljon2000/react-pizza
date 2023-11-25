import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound/NotFound";
import NoLeftBasket from "./pages/NoLeftBasket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/noleftbasket" element={<NoLeftBasket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
