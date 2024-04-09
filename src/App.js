import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/Navbar/NavBar";
import Homepage from "./component/Homepage";
import ProductPage from "./component/Product/ProductPage";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
