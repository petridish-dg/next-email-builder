export default function Button({ text, onClick }) {
    function handleClick() {
        console.log("Add button clicked");
    }
    return <button onClick={onClick}>{text}</button>;
}
