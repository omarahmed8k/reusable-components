import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Language from "../components/Language/Language.jsx";
import MasterRoutes from "../routes/MasterRoutes";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Language />
      <MasterRoutes />
    </div>
  );
}
