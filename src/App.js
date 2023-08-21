import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/navigation/Navbar";

import AboutUsPage from "./Components/about-us-page/AboutUsWebPage";
import OurProductsPage from "./Components/our-products-page/OurProductsWebPage";

import HomePage from "./Components/home-page/HomeWebPage";
import PackagingPallet from "./Components/packaging-pallet/PackagingPallet";

import ProductState from "./context/ProductState";
import PackagingCrate from "./Components/packaging-crate/PackagingCrate";
import PackagingBox from "./Components/packaging-box/PackagingBox";
import ContactUs from "./Components/contact-us/ContactUs";
import CataloguePage from "./Components/catalogue-page/CataloguePage";

function App() {
  return (
    <ProductState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-products" element={<OurProductsPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/packaging-pallet" element={<PackagingPallet />} />
          <Route path="/packaging-crate" element={<PackagingCrate />} />
          <Route path="/packaging-box" element={<PackagingBox />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </ProductState>
  );
}

export default App;
