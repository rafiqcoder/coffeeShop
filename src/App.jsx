import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import FrontendLayout from "./components/Layouts/FrontendLayout";
import About from "./pages/about";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/Signup";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import DashboardHome from "./components/Dashboard/DashboardHome";
import AddProduct from "./components/Dashboard/AddProduct";
import AllProducts from "./components/Dashboard/AllProducts";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="/dashboard/addproducts" element={<AddProduct />} />
          <Route path="/dashboard/allproducts" element={<AllProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
