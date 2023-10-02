import ModuleCard from "../ModuleCard/ModuleCard";
import Card from './../../ui/Card';
import OneUpForm from "@/components/modules/OneUp/OneUpForm";

export default function OneUpMain() {
    return (
        <ModuleCard title="One Up - Main" description="Masthead Image(1024x576) Intro Paragraph + Button">
            <Card>
                <OneUpForm />
            </Card>
        </ModuleCard>
    );
}
