import styles from "./FormComponent.module.css";

function FormComponent({ title, children }) {
  return (
    <div className={styles.formComponent}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export { FormComponent };
