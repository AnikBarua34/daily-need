import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {Switch,Route,useRouteMatch,Link} from "react-router-dom";
import AdminRoute from '../../AllRoutes/AdminRoute/AdminRoute';
import PrivateRoute from '../../AllRoutes/PrivateRoute/PrivateRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import PayNow from '../PayNow/PayNow';
import Review from '../Review/Review';

const DashboardHomee = () => {
    let{path,url} = useRouteMatch();
    return (
        <div>
            <h1 className='bg-warning'>This is Dashboard</h1>
            <Container>
                <Row>
                    <Col className="mt-2 border" xs={4} md={4} lg={4}>
                        <h2>Tripple-View-Laptop-Zone</h2>
                        <Link to ={`${url}/paynow`}><button className="btn btn-success" style={{textDecoration:'none', width:'100%'}}  >Pay Now</button></Link>
                        <Link to ={`${url}/review`}><button className="btn btn-warning" style={{textDecoration:'none', width:'100%'}}>Review</button></Link>
                        <Link to ={`${url}/myorders`}><button className="btn btn-primary" style={{textDecoration:'none', width:'100%'}}>My Orders</button></Link>
                        <Link to ={`${url}/manageAllOrders`}><button className="btn btn-dark" style={{textDecoration:'none', width:'100%'}}>Manage All Order</button></Link>
                        <Link to ={`${url}/manageProducts`}><button className="btn btn-dark" style={{textDecoration:'none', width:'100%'}}>Manage Products</button></Link>
                        <Link to ={`${url}/makeAdmin`}><button className="btn btn-secondary" style={{textDecoration:'none', width:'100%'}}>Make Admin</button></Link>
                        <Link to ='/home'><button className="btn btn-danger mt-5"style={{textDecoration:'none', width:'100%'}}>Back to Home</button></Link>
                    </Col>

                    <Col className="mt-2 border" xs={8} md={8} lg={8}>
                    
                    <Switch>
                    <PrivateRoute  path={`${path}/paynow`}>
                        <PayNow></PayNow>
                    </PrivateRoute>
                    <PrivateRoute  path={`${path}/review`}>
                        <Review></Review>
                    </PrivateRoute>
                    <PrivateRoute  path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>

                    <PrivateRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrder></ManageAllOrder>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </PrivateRoute>

                    </Switch>
                    </Col>
                </Row>
            </Container>
         
        </div>
    );
};

export default DashboardHomee;