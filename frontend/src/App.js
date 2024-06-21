import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/Services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Services /> */}
    </div>
  );
}

export default App;
