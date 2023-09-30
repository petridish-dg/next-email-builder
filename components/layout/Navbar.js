import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles["nav-heading"]}>
                <h1>
                    Abercrombie & Kent |<span> Email Builder</span>
                </h1>
            </div>
            <div></div>
        </nav>
    );
}
