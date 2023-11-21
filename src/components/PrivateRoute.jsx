import React from "react";
import { Outlet } from "react-router-dom";
const PrivateRoute = () => {
  return (
    <>
      <h4>Via..Private</h4>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
