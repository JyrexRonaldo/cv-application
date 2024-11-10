import styles from "./InputComponent.module.css";

function InputComponent({
  labelName,
  type,
  placeholder,
  value,
  handlerFunction,
}) {
  return (
      <div className={styles.inputComponent}>
        <label>
          {labelName}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handlerFunction}
          />
      </div>
  );
}

export { InputComponent };
