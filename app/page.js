import TwoUpMain from "@/components/modules/TwoUp/TwoUpMain";
import styles from "./page.module.css";
import MainLeft from "@/components/main/left/Mainleft";

export default function Home() {
    return (
        <main>
            <MainLeft>
                <TwoUpMain />
            </MainLeft>
        </main>
    );
}
