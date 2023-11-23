import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store.js";
import Hero from "./components/Hero";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<Hero />} />
            <Route path="/login" element={<SigninPage />}></Route>
            <Route path="/register" element={<SignupPage />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword/token" element={<ResetPassword />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
