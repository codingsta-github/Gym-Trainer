import { Route, Routes } from "react-router-dom";
import "./App.css";
import "animate.css";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Brand from "./Pages/Shared/Brand/Brand";
import ServiceCart from "./Pages/ServiceCart/ServiceCart";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
      <Brand></Brand>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/ServiceCart/:id" element={<ServiceCart></ServiceCart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
