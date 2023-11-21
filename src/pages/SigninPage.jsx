import React, { useState } from "react";
import FormContainer from "../components/FormContainer.jsx";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const SigninPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

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
