import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import styles from './styles.module.scss';

export function Header() {


  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <p>Tiago Oliveira</p>
        <div className={styles.navItems}>
          <NavLink
            to="/"
            exact
            style={({ isActive }) => ({
              color: isActive ? '#167ABC' : '#555555',
            })}
          >
            Home
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? '#167ABC' : '#555555',
            })}
            to="/contato"
          >
            Contato
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
