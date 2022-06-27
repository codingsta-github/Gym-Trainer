import { Route, Routes } from "react-router-dom";
import "./App.css";
import "animate.css";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Brand from "./Pages/Shared/Brand/Brand";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import DetailsContainer from "./Pages/Shared/DetailsContainer/DetailsContainer";
import Shop from "./Pages/Shop/Shop";
import WorkOut from "./Pages/Shop/WorkOut/WorkOut";
import Product from "./Pages/Shop/Product/Product";
function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
      <Brand></Brand>
      <Routes>
     
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/DetailsContainer/:id" element={<DetailsContainer></DetailsContainer>}></Route>
        <Route path="/shop" element={<Shop></Shop>}>
          <Route index element={<WorkOut></WorkOut>}></Route>
          <Route path="/shop/product" element={<Product></Product>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
