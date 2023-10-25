import { useAtom } from "jotai";
import styles from "./PreviewEmail.module.css";
import { selectedTwoUpsAtom } from "@/data/preview-store";

export default function PreviewEmail() {
    const [selectedTwoUps] = useAtom(selectedTwoUpsAtom);

    return (
        <>
            <div>Preview email here</div>
            <div className={styles["preview-container"]}>
                {selectedTwoUps.map((component, index) => (
                    <div key={index}>
                        {/* Render each component here */}
                    </div>
                ))}
            </div>
        </>
    );
}
