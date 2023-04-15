import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Language from "../components/Language/Language.jsx";
import MasterRoutes from "../routes/MasterRoutes";
import DarkMode from "../components/DarkMode/DarkMode";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <Header />
      <Language />
      <DarkMode />
      <div className="page">
        <div className="container">
          <MasterRoutes />
        </div>
      </div>
    </div>
  );
}
