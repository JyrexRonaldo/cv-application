import "../styles/InputComponent.css";

function InputComponent({ labelName, type, value, onChange }) {
  return (
    <>
      <label>
        {labelName}
        <input type={type} value={value} onChange={onChange} />
      </label>
      <br />
    </>
  );
}

export { InputComponent };
