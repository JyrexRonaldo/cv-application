import "../styles/FormComponent.css";

function FormComponent({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export { FormComponent };
