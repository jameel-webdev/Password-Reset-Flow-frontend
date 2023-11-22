import { Container, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux-toolkit/slices/userApiSlice"; //mutation from userApiSLice
import { logout } from "../redux-toolkit/slices/authSlice"; // removing localstorageDate funtn from the authSlice

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  // initiaziling dispatch - bcoz we have regular logout fuctn without any asynchronous request
  // if its mentioned inside mutation or query we dont need to dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApi] = useLogoutMutation(); //we using difrnt variable name so that logout funtn kept untouched
  const logoutHandler = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Card className="mt-5 p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN - - Password Reset Flow</h1>
          <p className="text-center mb-4 fs-5">
            The task is to implement a correct password reset flow with email
            verification and update of the new password in the database for the
            webapp.
          </p>
          <p>
            <strong>Frontend :</strong> Vite-React , React-bootstrap , Bootstrap
            , React-router-dom , React-toastify , React-redux-toolkit
          </p>
          <p>
            <strong>Backend :</strong> Express , MongoDb(mongoose) , dotenv ,
            jsonwebtoken , bcryptjs , nodemailer , cookie-parser
          </p>
          <p>
            Once Logout! Reset your password by clicking{" "}
            <strong>Forgot Password!</strong> while <strong>Signin</strong>
          </p>
          <div className="d-flex">
            {userInfo ? (
              <>
                <Link to="/">
                  <Button
                    variant="primary"
                    className="me-3"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="primary" className="me-3">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="secondary">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
