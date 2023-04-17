import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { toggle } from "../../store/toggle-slice";
import { ReactComponent as Close } from "../../assets/svgs/close.svg";
import logoAr from "../../assets/images/logo-ar.png";
import logoEn from "../../assets/images/logo-en.png";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  return (
    <div className={`sidebar ${globalState.toggle.sidebar ? "active" : " "}`}>
      <button
        className="sidebar-button"
        onClick={() => {
          dispatch(toggle());
        }}
      >
        <Close />
      </button>
      <ul>
        <li className="sidebar-top" onClick={() => { dispatch(toggle()); }}>
          {t("lang") === "en" ? (
            <img src={logoEn} alt="logo" />
          ) : (
            <img src={logoAr} alt="logo" />
          )}
        </li>
        <li className="sidebar-bottom">
          <h5>{t("components")}</h5>
          <ul>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/reusable-components/table">{t("table")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("inputs")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("imgUploader")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("buttons")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("heads")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("alerts")}</NavLink></li>
          </ul>
          <h5>{t("topics")}</h5>
          <ul>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/reusable-components/service-worker">{t("serviceWorker")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("folderStructure")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("auth")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("globalState")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("routingLayouts")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("services")}</NavLink></li>
            <li><NavLink onClick={() => { dispatch(toggle()); }} to="/">{t("unitTest")}</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
