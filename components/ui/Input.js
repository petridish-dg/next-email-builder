export default function Input({ name = "Input", placeholder, onchange }) {
    return (
        <div>
            <label>{name}:
                <input type="text" name={name} onChange={onchange} placeholder={placeholder}/>
            </label>
        </div>
    );
}