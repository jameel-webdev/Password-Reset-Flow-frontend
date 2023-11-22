import React, { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer.jsx";
import { Form, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useResetpasswordMutation } from "../redux-toolkit/slices/userApiSlice.js";

const ResetPassword = () => {
  const [password, setPassword] = useState();
  const { token } = useParams();
  {
    /*Fetching data from backend starts here*/
  }
  const navigate = useNavigate();
  const [resetpassword, { isLoading }] = useResetpasswordMutation();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  const sumbitHandler = async (e) => {
    e.preventDefault();
    if (password) {
      try {
        const res = await resetpassword({ password, token }).unwrap();
        navigate("/login");
        toast.success(res.message);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    } else {
      toast.error(`Enter New Password`);
    }
  };
  {
    /*Fetching data from backend ends here*/
  }

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
        {isLoading && <Loader />}
        <Button variant="primary" type="submit" className="mt-3">
          Reset password
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ResetPassword;
