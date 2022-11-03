import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

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
        <Link className="nav-item" to="/nester">
          Нестер
        </Link>

        <Link className="nav-item" to="/login">
      Войти
        </Link>
        <Link className="nav-item" to="/register">
      Регистрация
        </Link>
      </div>
    </nav>
  );
}
