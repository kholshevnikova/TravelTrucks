import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import Catalog from "../../pages/Catalog/Catalog";
import CatalogItem from "../../pages/CatalogItem/CatalogItem";
// import css from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogItem />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
