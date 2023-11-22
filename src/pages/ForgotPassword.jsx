import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer.jsx";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForgotpasswordMutation } from "../redux-toolkit/slices/userApiSlice.js";
import { toast } from "react-toastify";
import Loader from "../components/Loader.jsx";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  {
    /*Fetching data from backend starts here*/
  }
  const navigate = useNavigate();
  const [forgotpassword, { isLoading }] = useForgotpasswordMutation();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotpassword({ email }).unwrap();
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
        {isLoading && <Loader />}
        <div className="d-flex gap-4">
          <Button variant="primary" type="submit" className="mt-3">
            Send Mail
          </Button>
          <Link to="/login">
            <Button variant="primary" type="submit" className="mt-3">
              Remember your password?
            </Button>
          </Link>
        </div>
      </Form>
    </FormContainer>
  );
};

export default ForgotPassword;
