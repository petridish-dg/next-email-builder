'use client'

import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import {atom, useAtom } from "jotai";

export default function OneUpForm() {
    const imageURLAtom = atom('');
    const headingAtom = atom('');
    const introAtom = atom('');
    const button = atom({text: '', url: ''});
    const [imageURL, setImageURL] = useAtom(imageURLAtom);
    const [heading, setHeading] = useAtom(headingAtom);
    const [intro, setIntro] = useAtom(introAtom);
    const [buttonText, setButtonText] = useAtom(button.text);
    const [buttonURL, setButtonURL] = useAtom(button.url);
    
    function handleInputChange(inputLabel, e) {
        
    }

    return (
        <>
            <Input name="Image URL" placeholder="https://example.com/assets/peter.png" onchange={handleInputChange}/>
            <Input name="Heading" placeholder="Relive Your Inspiring Greek Isles Expedition" onchange={handleInputChange}/>
            <TextArea name="Intro Paragraph" onchange={handleInputChange}/>
            <Input name="Button Text" placeholder="Click Here" onchange={handleInputChange}/>
        </>
    );
}