import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import PayNow from "../PayNow/PayNow";
import PrivateRoute from "../PrivateRoute";
import Review from "../Review/Review";

const DashboardHomee = () => {
  const {user,admin} =useFirebase();
  return (
    <div>
      <h1 className="bg-warning">This is Dashboard</h1>
      <Container>
        <Row>
          <Col className="mt-2 border" xs={4} md={4} lg={4}>
            <h2>Tripple-View-Laptop-Zone</h2>
          {/*Normal user */}
          {
            !admin &&
            <div> <Link to="/dashboard/paynow">
            <button
              className="btn btn-success"
              style={{ textDecoration: "none", width: "100%" }}
            >
              Pay Now
            </button>
          </Link>
          <Link to="/dashboard/review">
            <button
              className="btn btn-warning"
              style={{ textDecoration: "none", width: "100%" }}
            >
              Review
            </button>
          </Link>
          <Link to="/dashboard/myorders">
            <button
              className="btn btn-primary"
              style={{ textDecoration: "none", width: "100%" }}
            >
              My Orders
            </button>
          </Link>
          </div>
          }
          {/* Admin Panel */}
           {
             admin && <div> <Link to="/dashboard/manageAllOrders">
             <button
               className="btn btn-dark"
               style={{ textDecoration: "none", width: "100%" }}
             >
               Manage All Order
             </button>
           </Link>
           <Link to="/dashboard/addProduct">
             <button
               className="btn btn-dark"
               style={{ textDecoration: "none", width: "100%" }}
             >
              Add Product
             </button>
           </Link>
           <Link to="/dashboard/manageProducts">
             <button
               className="btn btn-dark"
               style={{ textDecoration: "none", width: "100%" }}
             >
               Manage Products
             </button>
           </Link>
           <Link to="/dashboard/makeAdmin">
             <button
               className="btn btn-secondary"
               style={{ textDecoration: "none", width: "100%" }}
             >
               Make Admin
             </button>
           </Link>
           <Link to="/">
             <button
               className="btn btn-danger mt-5"
               style={{ textDecoration: "none", width: "100%" }}
             >
               Back to Home
             </button>
           </Link></div>
           }
          </Col>

          <Col className="mt-2 border" xs={8} md={8} lg={8}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardHomee;
