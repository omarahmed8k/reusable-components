import React from "react";
import { Outlet } from "react-router";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1>📙 Welcome to Reusable Components References</h1>
      <Outlet />
    </div>
  );
}
