export default function Dropdown({
  label,
  options,
  placeholder,
  onChange,
  value,
  id,
}) {
  return (
    <>
      <div>
        <label>
          {label}
          <select name={label} onChange={onChange}>
            {options?.map((option) => (
              <option key={option}  value={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
}
