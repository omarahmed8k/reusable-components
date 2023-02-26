import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home/Home";

export default function MasterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<Home />}>
        <Route path="" element={<Navigate replace to="user" />} />
        <Route path="*" element={<Navigate replace to="user" />} />
        <Route index path="user" element={<Home />} />
        <Route path="user-page" element={<Home />} />
      </Route>
    </Routes>
  );
}
