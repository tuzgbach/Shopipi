import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/Navbar/NavBar";
import Homepage from "./component/Homepage";
import ProductPage from "./component/Product/ProductPage";
import Footer from "./component/Footer/Footer";
import Top from "./component/Button/Top";
import ChatShop from "./component/Chat/ChatShop";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Top />
        <ChatShop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
