import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer.jsx";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../redux-toolkit/slices/userApiSlice.js";
import { setUserInfo } from "../redux-toolkit/slices/authSlice.js";

const SignupPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  {
    /*Fetching data from backend starts here*/
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const sumbitHandler = async (e) => {
    e.preventDefault();
    if (name && email && password) {
      try {
        const res = register({ name, email, password });
        dispatch(setUserInfo({ ...res })); // setting userInfo to the localStorage
        navigate("/");
        toast.success(`Registration Successful`);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    } else {
      toast.error(`Enter all details to register`);
    }
  };
  {
    /*Fetching data from backend ends here*/
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={sumbitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {isLoading && <Loader />}

        <Button variant="primary" type="submit" className="mt-3">
          Register
        </Button>

        <Row className="py-3">
          <Col className="fs-5">
            <Link to="/login">Already have an account? Sign In</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default SignupPage;
