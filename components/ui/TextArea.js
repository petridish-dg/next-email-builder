import { useState } from "react"

export default function TextArea({ name, inputData}) {
    const [textAreaInput, setTextAreaInput] = useState(inputData)

    function handleTextAreaInput(e) {
        setTextAreaInput(e.target.value)
        console.log(textAreaInput)
    }


    return (
        <label>
            {name}
            <textarea name="message" rows="10" cols="30" placeholder="Insert Text Here" onChange={handleTextAreaInput}/>
        </label>
    )
}