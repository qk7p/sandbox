import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <Link to="/resume">резюме</Link>
      <a href="https://vk.com/mr.qk7p" target={"_blank"}>
        VK
      </a>
    </footer>
  );
}
