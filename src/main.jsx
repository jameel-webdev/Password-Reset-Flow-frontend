import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ProfilePage from "./pages/ProfilePage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/login" element={<SigninPage />}></Route>
          <Route path="/register" element={<SignupPage />}></Route>
          {/*Private Route */}
          <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
