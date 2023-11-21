import React, { useState } from "react";
import FormContainer from "../components/FormContainer.jsx";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <FormContainer>
      <h1>Reset Password</h1>
      <Form onSubmit={sumbitHandler}>
        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Reset password
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ResetPassword;
