import React from "react";
import { Outlet } from "react-router";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1>📙 Welcome To Frontend Side By Side References</h1>
      <Outlet />
    </div>
  );
}
