import DropDown from "commonComponents/drop-down/DropDown";
import { useAuth } from "hooks/useAuth";
import LoginForm from "pages/login-page/login-form/LoginForm";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "assets/icons/general/profile.svg";
import "./navbar.css";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const { isAuth } = useAuth();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const refToggleDropDown = useRef<HTMLImageElement>(null);

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideDropDown);
    return () => {
      window.removeEventListener("click", handleClickOutsideDropDown);
    };
  });

  const handleClickOutsideDropDown = (event: MouseEvent) => {
    if (isDropDownOpen) {
      if (refToggleDropDown.current && event.target instanceof HTMLElement) {
        if (!refToggleDropDown.current.contains(event.target)) {
          setIsDropDownOpen(false);
        }
      }
    }
  };

  const handleToggleDropDown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="brandContainer">
        <Link to="/" id="brand">
          sandbox
        </Link>
      </div>
      <div className="navigationContainer">
        {/* //TODO исправить при реализации авторизации */}
        {isAuth ? (
          <Link className="nav-item" to="/nester">
            Нестер
          </Link>
        ) : null}
        <div className="drop-down-holder" ref={refToggleDropDown}>
          <img
            src={ProfileIcon}
            alt="Лого профиля"
            width="30px"
            height="30px"
            className="profile-icon"
            onClick={handleToggleDropDown}
          />
          {isDropDownOpen && (
            <DropDown className="drop-down">
              <LoginForm />
            </DropDown>
          )}
        </div>
      </div>
    </nav>
  );
}
