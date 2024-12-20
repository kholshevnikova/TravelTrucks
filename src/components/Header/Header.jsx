import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/TravelTrucks.svg";

export default function Header() {
  return (
    <header>
      <div className={css.container}>
        <NavLink to="/" className={css.logo}>
          <img src={logo} alt="Logo" />
        </NavLink>

        <nav className={css.navigation}>
          <ul className={css.navlist}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${css.navListItem} ${css.active}`
                    : css.navListItem
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive
                    ? `${css.navListItem} ${css.active}`
                    : css.navListItem
                }
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
