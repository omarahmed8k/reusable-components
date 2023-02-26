import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";

export default function MasterRoutes() {
  return (
    <Routes>
      <Route
        index
        path="/*"
        element={<Navigate replace to="reusable-components" />}
      />
      <Route path="/reusable-components" element={<Home />}>
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  );
}
