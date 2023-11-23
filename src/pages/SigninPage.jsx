import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer.jsx";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// useDispatch - to dispatch an action // useSelector - to select from our global state
import { useLoginMutation } from "../redux-toolkit/slices/userApiSlice.js";
import { setUserInfo } from "../redux-toolkit/slices/authSlice.js";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const SigninPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  {
    /*Fetching data from backend starts here*/
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Once we console logged useLoginMutation we get two indexes 0: function , 1: status
  // here we call 0: function as login , 1: status {isLoading}
  const [login, { isLoading }] = useLoginMutation();
  // to get userData we use useSelector() - reference authSlice and the name we mentioned here.."auth"
  const { userInfo } = useSelector((state) => state.auth);
  // once userInfo true we need to redirect to the homepage so useEffect comes in play
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]); // here we added dependencies with useEffect

  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      // calling the login function from - userApiSlice - which has url,methods & we need to send data to body
      const res = await login({ email, password }).unwrap(); // data for loginin - email & password
      // unwrap() - purpose is to unwrap that promise
      // response from the server end up in above mentioned res variable
      dispatch(setUserInfo({ ...res })); // set userInfo to the localStorage
      navigate("/");
      toast.success(res.message);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  {
    /*Fetching data from backend ends here*/
  }
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={sumbitHandler}>
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
          Login
        </Button>

        <Row className="py-3">
          <Col className="fs-5">
            <Link to="/forgotpassword">Forgot password?</Link>
          </Col>
          <Col className="fs-5">
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default SigninPage;
