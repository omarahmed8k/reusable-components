import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/toggle-slice";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <>
      <div className="header">
        <div className="container">
          <ul>
            <li>
              <Link className="logo" to={`/`}>
                logo
              </Link>
            </li>
            <li>
              <ul className="nav-links">
                <li>
                  <NavLink to={`/`}>{t("header.home")}</NavLink>
                </li>
                <li>
                  <NavLink to={`/`}>{t("header.page1")}</NavLink>
                </li>
                <li>
                  <NavLink to={`/`}>{t("header.page2")}</NavLink>
                </li>
                <li>
                  <NavLink to={`/`}>{t("header.page3")}</NavLink>
                </li>
                <li>
                  <NavLink to={`/`}>{t("header.page4")}</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <div
                className="menu"
                onClick={() => {
                  dispatch(toggle());
                }}
              >
                Menu
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
