import styles from "./ModuleCard.module.css";

export default function ModuleCard({ title ="Insert Title", description, children }) {
    return (
        <div className={styles["module-card"]}>
            <div className={styles["module-card__header"]}>
                <h2>{title}</h2>
                {description && <p>{description}</p>}
            </div>
            {children}
        </div>
    );
}
