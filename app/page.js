import TwoUpMain from "@/components/modules/TwoUp/TwoUpMain";
// import styles from "./page.module.css";
import MainLeft from "@/components/main/left/Mainleft";
import OneUpMain from "@/components/modules/OneUp/OneUpMain";
import MainRight from "@/components/main/right/MainRight";
import TemplateDetails from "@/components/modules/TemplateDetails/TemplateDetails";

export default function Home() {
    return (
        <main>
            <MainLeft>
                <TemplateDetails />
                <OneUpMain />
                <TwoUpMain />
            </MainLeft>
            <MainRight />
        </main>
    );
}
