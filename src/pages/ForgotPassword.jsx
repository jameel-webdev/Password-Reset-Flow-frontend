import React, { useState } from "react";
import FormContainer from "../components/FormContainer.jsx";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <FormContainer>
      <h1>Forgot Password</h1>
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

        <Button variant="primary" type="submit" className="mt-3">
          Send Mail
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ForgotPassword;
