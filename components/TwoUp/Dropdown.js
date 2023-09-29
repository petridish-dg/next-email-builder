export default function Dropdown({ label, options, placeholder, onChange, id }) {
    return (
        <>
            <div>
                <label>{label}</label>
                <select onChange={onChange} defaultValue="">
                    {placeholder && <option value="">{placeholder}</option>}
                    {options?.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
            </div>
        </>
    );
}