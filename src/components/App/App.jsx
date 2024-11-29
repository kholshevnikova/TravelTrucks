import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";

import CamperDetail from "../../pages/CamperDetail/CamperDetail";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
// import css from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetail />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
