'use client'

import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import { useState } from "react";

export default function OneUpForm() {
    const [imgUrl, setImgUrl] = useState("");
    const [introParagraph, setIntroParagraph] = useState("");
    const [buttonText, setButtonText] = useState("");
    const [buttonLink, setButtonLink] = useState("");

    function handleChange() {
        console.log("Change")
    }

    return (
        <>
            <Input name="Image URL" placeholder="https://example.com/assets/peter.png"/>
            <TextArea name="Intro Paragraph"/>
            <Input name="Button Text" placeholder="Click Here"/>
        </>
    );
}