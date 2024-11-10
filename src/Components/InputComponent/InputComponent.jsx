import "./InputComponent.css";

function InputComponent({
  labelName,
  type,
  placeholder,
  value,
  handlerFunction,
}) {
  return (
    <>
      <div>
        <label>
          {labelName}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handlerFunction}
          />
        </label>
      </div>
    </>
  );
}

export { InputComponent };
