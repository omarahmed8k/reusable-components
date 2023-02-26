import React from "react";
import { Outlet } from "react-router";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1>This is the Home page. It is a child of the Layout component</h1>
      <Outlet />
    </div>
  );
}
