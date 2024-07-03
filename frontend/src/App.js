import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Book from "./pages/Book";
import Search from "./pages/Search";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/Packages" element={<Packages />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Book" element={<Book />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
