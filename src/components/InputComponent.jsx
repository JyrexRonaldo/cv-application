import "../styles/InputComponent.css";

function InputComponent({ labelName, type, placeholder, handlerFunction }) {
  return (
    <>
      <div>
          <label>
            {labelName}
            <input type={type} placeholder={placeholder} onChange={handlerFunction}/>
          </label>
      </div>
    </>
  );
}

export { InputComponent };