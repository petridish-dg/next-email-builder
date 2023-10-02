import TwoUpMain from "@/components/modules/TwoUp/TwoUpMain";
import styles from "./page.module.css";
import MainLeft from "@/components/main/left/Mainleft";
import OneUpMain from "@/components/modules/OneUp/OneUpMain";

export default function Home() {
    return (
        <main>
            <MainLeft>
                <OneUpMain />
                <TwoUpMain />
            </MainLeft>
        </main>
    );
}
