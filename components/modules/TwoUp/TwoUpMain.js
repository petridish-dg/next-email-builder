import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import TwoUpCard from "./TwoUpCard";
import styles from "./TwoUpMain.module.css";
import Button from "@/components/ui/Button";
import ModuleCard from "../ModuleCard/ModuleCard";

const TwoUpPair = ({ dataIn }) => {
    return (
        <div className={styles["twoup-pair"]}>
            <TwoUpCard dataIn={dataIn} />
            <TwoUpCard dataIn={dataIn} />
        </div>
    );
};

export default async function TwoUpMain() {
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase.from("akXml").select("*");
    if (error) {
        console.log("Could not fetch data from Supabase");
    } else {
        console.log("Data fetched from Supabase");
    }

    function handleAddClick() {
        console.log("Add button clicked");
    }

    return (
        <ModuleCard title="Two Up - Journeys">
            <div className={styles["twoup-main"]}>
                <TwoUpPair dataIn={data} />
                <Button text="Add" />
            </div>
        </ModuleCard>
    );
}
