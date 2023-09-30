export default function Dropdown({ label, options, onChange, value }) {
    return (
        <div>
            <label>
                {label}
                <select name={label} onChange={onChange} value={value}>
                    {options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}
