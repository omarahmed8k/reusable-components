import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/toggle-slice";
import { useLocation } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/svgs/menu.svg";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <>
      <div className="header">
        <div className="container">
          <ul>
            <li>
              {`${pathname.split("/")[2] || "Home"}`.toUpperCase()}
            </li>
            <li>
              <div
                className="menu"
                onClick={() => {
                  dispatch(toggle());
                }}
              >
                <Menu />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
