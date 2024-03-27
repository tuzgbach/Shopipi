import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import NavBar from "./component/Navbar/NavBar";

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
