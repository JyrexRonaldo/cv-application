import "../styles/InputComponent.css";

function InputComponent({ labelName, type, placeholder }) {
  return (
    <>
      <label>
        {labelName}
        <input type={type} placeholder={placeholder} />
      </label>
      <br />
    </>
  );
}

export { InputComponent };
