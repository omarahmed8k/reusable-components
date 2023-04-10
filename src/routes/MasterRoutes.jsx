import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import CustomTable from "../pages/CustomTable/CustomTable";

export default function MasterRoutes() {
  return (
    <Routes>
      <Route
        index
        path="/*"
        element={<Navigate replace to="reusable-components" />}
      />
      <Route exact path="/reusable-components" element={<Home />}>
        <Route path="table" element={<CustomTable />} />
      </Route>
    </Routes>
  );
}
