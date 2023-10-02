import styles from "./MainLeft.module.css";

export default function MainLeft({ children }) {
    return <div className={styles["box-left"]}>{children}</div>;
}
