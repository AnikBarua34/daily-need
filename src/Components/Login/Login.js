import React from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useFirebase from "../Hooks/useFirebase";

const Login = () => {
  const { user, googleLogin } = useFirebase();
  const handleLogin = () => {
    googleLogin();
  };
  return (
    <div className="my-5 text-center">
      <Container>
        <Row>
          <Col lg={8} className="d-none d-lg-block mt-0">
            <img className="img-fluid h-75" src="" alt="" />
          </Col>
          <Col md={12} lg={4} className="mt-3">
            <h2 className="fw-bold">Welcome Back !</h2>
            <p>Lets Get you Logged in</p>

            <div className="py-3">
              <Button
                onClick={handleLogin}
                className="m-3 w-50"
                variant="outline-warning"
              >
                {" "}
                <FcGoogle /> Login With Google
              </Button>
            </div>
            <div className="mt-3 ">
              <p>
                {/* Don't have an Account?{" "} */}
                {/* <Link to="/register" className="text-info fw-bold">
                  SignUp
                </Link>{" "} */}
              </p>
            </div>
          </Col>
          {user && (
            <Alert variant="success">
              {user.displayName} successfully logged in
            </Alert>
          )}
          ;
        </Row>
      </Container>
    </div>
  );
};

export default Login;
