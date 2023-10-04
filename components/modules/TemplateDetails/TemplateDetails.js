'use client'

import { useState } from "react";
import ModuleCard from "../ModuleCard/ModuleCard";

export default function TemplateDetails() {
    const [emailTitle, setEmailTitle] = useState("");


    return (
        <ModuleCard title="Project Details">
            <div>Template Details</div>
            <div>Template Description</div>
        </ModuleCard>
    )
}