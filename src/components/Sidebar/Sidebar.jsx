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
  const { t, i18n } = useTranslation();
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
        <li className="sidebar-top">
          {t("lang") === "en" ? (
            <img src={logoEn} alt="logo" />
          ) : (
            <img src={logoAr} alt="logo" />
          )}
        </li>
        <li className="sidebar-bottom">
          <h5>{t("components")}</h5>
          <ul>
            <li>
              <NavLink to="/reusable-components/users">{t("table")}</NavLink>
            </li>
            <li>
              <NavLink to="/">{t("inputs")}</NavLink>
            </li>
            <li>
              <NavLink to="/">{t("buttons")}</NavLink>
            </li>
            <li>
              <NavLink to="/">{t("heads")}</NavLink>
            </li>
            <li>
              <NavLink to="/">{t("alerts")}</NavLink>
            </li>
          </ul>
          <h5>{t("topics")}</h5>
          <ul>
            <li>
              <NavLink to="/">{t("auth")}</NavLink>
            </li>
            <li>
              <NavLink to="/">{t("folderStructure")}</NavLink>
            </li>
            <li>
              <NavLink to="/">{t("globalState")}</NavLink>
            </li>
            <li>
              <NavLink to="/">{t("routingLayouts")}</NavLink>
            </li>
            <li>
              <NavLink to="/">{t("services")}</NavLink>
            </li>
            <li>
              <NavLink to="/">{t("unitTest")}</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
