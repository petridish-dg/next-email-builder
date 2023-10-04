"use client";

import TwoUpCard from "./TwoUpCard";
import styles from "./TwoUpMain.module.css";
import ModuleCard from "../ModuleCard/ModuleCard";
import { useState } from "react";
import Button from "@/components/ui/Button";

const TwoUpPair = () => {
    return (
        <div className={styles["twoup-pair"]}>
            <TwoUpCard />
            <TwoUpCard />
        </div>
    );
};

export default function TwoUpMain() {
    const [twoUpArray, setTwoUpArray] = useState([<TwoUpPair />]);

    function handleAddClick() {
        setTwoUpArray([...twoUpArray, <TwoUpPair />]);
    }

    function handleSubtractClick() {
        setTwoUpArray(twoUpArray.slice(0, -1));
    }

    return (
        <ModuleCard title="TwoUp - Journeys" description="Image size (590x370)">
            <div className={styles["twoup-main"]}>
                {twoUpArray.map((pair) => {
                    return pair;
                })}
                <div>
                    <Button onClick={handleSubtractClick} text={"-"} />
                    <Button onClick={handleAddClick} text={"+"} />
                </div>
            </div>
        </ModuleCard>
    );
}

export { TwoUpPair };
