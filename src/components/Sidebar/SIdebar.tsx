import styles from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import samanthaImg from "../../assets/png/samantha.png";

const sidebarNavLinks = [
  "dashboard",
  "expenses",
  "wallets",
  "summary",
  "accounts",
  "settings",
];
export default function Sidebar() {
  const location = useLocation();
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          {" "}
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={samanthaImg} alt="samantha" />
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>Samantha</p>
            <p className={styles.userEmail}>samantha@gmail.com</p>
          </div>
          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sideNavLink) => (
                <li className={styles.sidebarNavItem} key={sideNavLink}>
                  <Link
                    className={
                      location.pathname === `/${sideNavLink}`
                        ? styles.sideNavLinkActive
                        : styles.sideNavLink
                    }
                    to={`/${sideNavLink}`}
                  >
                    {sideNavLink.charAt(0).toUpperCase() + sideNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
