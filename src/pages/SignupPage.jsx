import React, { useState } from "react";
import FormContainer from "../components/FormContainer.jsx";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const SignupPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

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
