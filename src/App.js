
import { Fragment } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Blogs from "./Components/Blogs/Blogs";


import Header from "./Components/Header/Header";

import Shops from "./Components/Shops/Shops";
import Login from "./Components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardHomee from "./Components/Dashboard/DashboardHomee/DashboardHomee";
import PayNow from "./Components/Dashboard/PayNow/PayNow";
import PrivateRoute from "./Components/Dashboard/PrivateRoute";
import Review from "./Components/Dashboard/Review/Review";
import MyOrders from "./Components/Dashboard/MyOrders/MyOrders";
import ManageAllOrder from "./Components/Dashboard/ManageAllOrder/ManageAllOrder";
import ManageProducts from "./Components/Dashboard/ManageProducts/ManageProducts";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Components/Login/AdminRoute";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import ContactUs from './Components/ContactUs/ContactUs';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/contact" element={<ContactUs />} />

            <Route path="/about" element={<AboutUs />} />

            <Route path="/shop" element={<Shops />} />

            <Route path="/blog" element={<Blogs />} />

            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<PrivateRoute><DashboardHomee /></PrivateRoute>}>
              {/* Normal User */}
              <Route
                path="paynow"
                element={
                  <PrivateRoute>
                    <PayNow />
                  </PrivateRoute>
                }
              />
              <Route
                path="review"
                element={
                  <PrivateRoute>
                    <Review />
                  </PrivateRoute>
                }
              />
              <Route
                path="myOrders"
                element={
                  <PrivateRoute>
                    <MyOrders />
                  </PrivateRoute>
                }
              />
              {/* Admin ROute */}
              <Route
                path="manageAllOrders"
                element={
                  <AdminRoute>
                    <ManageAllOrder />
                  </AdminRoute>
                }
              />
              <Route
                path="manageProducts"
                element={
                  <AdminRoute>
                    <ManageProducts />
                  </AdminRoute>
                }
              />

              <Route
                path="makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="addProduct"
                element={
                  <AdminRoute>
                    <AddProduct />
                  </AdminRoute>
                }
              />
             
            </Route>
          </Routes>

          <Footer />
        </Fragment>
      </BrowserRouter>
    </div>
  );

}
export default App;
