// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import "../styles/App.css";
// import { Resume } from './Resume'
import { FormComponent } from "./FormComponent";
import { InputComponent } from "./InputComponent";

function App() {
  // const [count, setCount] = useState(0)

  const getInputFeatures = (labelName, type, placeholder) => {
    return { labelName, type, placeholder };
  };

  // console.log(getInputFeatures("Email", "text", "Yuh is my driver"));

  const personalDetailsFormFeatures = [
    getInputFeatures("Full Name", "text", "First and last name"),
    getInputFeatures("Email", "email", "Enter email"),
    getInputFeatures("Phone number", "tel", "Enter phone number"),
    getInputFeatures("Address", "text", "Enter address"),
  ];

  console.log(personalDetailsFormFeatures);

  const inputArray = personalDetailsFormFeatures.map((item, index) => {
    return (
      <InputComponent
        key={index}
        labelName={item.labelName}
        type={item.type}
        placeholder={item.placeholder}
      />
    );
  });

  return <FormComponent title={"Personal Details"}>{inputArray}</FormComponent>;
}

export default App;
