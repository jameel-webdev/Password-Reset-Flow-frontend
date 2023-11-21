import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>apppage</div>
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
