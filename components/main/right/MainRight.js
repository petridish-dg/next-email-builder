import PreviewEmail from "./PreviewEmail";
import styles from "./MainRight.module.css";

export default function MainRight() {
    return (
        <div className={styles.mainRight}>
            <div className={styles["mainRight-container"]}>
                <PreviewEmail />
            </div>
        </div>
    );
}
