import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/Navbar/NavBar";
import Homepage from "./component/Homepage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
