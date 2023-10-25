'use client'

import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";

export default function OneUpForm() {
    const [imageURL, setImageURL] = useState('');
    
    function handleInputChange(e) {
        console.log(e.target.value);
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