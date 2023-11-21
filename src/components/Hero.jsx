import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Hero = () => {
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
            <strong>Backend :</strong> Express , MongoDb(mongoose) ,
          </p>
          <div className="d-flex">
            <Link to="/login">
              <Button variant="primary" className="me-3">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="secondary">Sign Up</Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
