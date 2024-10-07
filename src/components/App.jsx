// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import "../styles/App.css";
import { Resume } from './Resume'
import { FormComponent } from "./FormComponent";
import { InputComponent } from "./InputComponent";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)

  const [personalDetailsInfo, setPersonalDetailsInfo] = useState({name: "", email: "", phoneNumber: "", address: ""}) 

  const handleNameChange = (e) => {
    setPersonalDetailsInfo({...personalDetailsInfo, name: e.target.value })
  }
  
  const handleEmailChange = (e) => {
    setPersonalDetailsInfo({...personalDetailsInfo, email: e.target.value })
  }
  
  const handlePhoneNumberChange = (e) => {
    setPersonalDetailsInfo({...personalDetailsInfo, phoneNumber: e.target.value })
  }
  
  const handleAddressChange = (e) => {
    setPersonalDetailsInfo({...personalDetailsInfo, address: e.target.value })
  }
  
  const getInputFeatures = (labelName, type, placeholder, handlerFunction) => {
    return { labelName, type, placeholder, handlerFunction };
  };

  const [educationInfo, setEducationInfo] = useState({placeOfStudy: "", degree: "", startDate: "", endDate: "", location: ""})

  const handlePlaceChange = (e) => {
        setEducationInfo({...educationInfo, placeOfStudy: e.target.value})    
  }

  const handleDegreeChange = (e) => {
    setEducationInfo({...educationInfo, degree: e.target.value})    
}

const handleStartDateChange = (e) => {
  setEducationInfo({...educationInfo, startDate: e.target.value})    
}

const handleEndDateChange = (e) => {
  setEducationInfo({...educationInfo, endDate: e.target.value})    
}

const handleLocationChange = (e) => {
  setEducationInfo({...educationInfo, location: e.target.value})    
}


const [experienceInfo, setExperienceInfo] = useState({companyName: "", positionTitle: "", startDate: "", endDate: "", location: "", description: ""})

  const handleCompanyNameChange = (e) => {
        setExperienceInfo({...experienceInfo, companyName: e.target.value})    
  }

  const handlePositionTitleChange = (e) => {
    setExperienceInfo({...experienceInfo, positionTitle: e.target.value})    
}

const handleStartDateCompanyChange = (e) => {
  setExperienceInfo({...experienceInfo, startDate: e.target.value})    
}

const handleEndDateCompanyChange = (e) => {
  setExperienceInfo({...experienceInfo, endDate: e.target.value})    
}

const handleCompanyLocationChange = (e) => {
  setExperienceInfo({...experienceInfo, location: e.target.value})    
}

const handleRoleDescriptionChange = (e) => {
  setExperienceInfo({...experienceInfo, description: e.target.value})    
}



  



  // console.log(getInputFeatures("Email", "text", "Yuh is my driver"));

  const personalDetailsFormFeatures = [
    getInputFeatures("Full Name", "text", "First and last name", handleNameChange),
    getInputFeatures("Email", "email", "Enter email", handleEmailChange),
    getInputFeatures("Phone number", "tel", "Enter phone number", handlePhoneNumberChange),
    getInputFeatures("Address", "text", "Enter address", handleAddressChange),
  ];

  const educationFormFeatures = [
    getInputFeatures("Place of study", "text", "Enter place of study", handlePlaceChange),
    getInputFeatures("Degree", "text", "Enter degree", handleDegreeChange),
    getInputFeatures("Start Date", "date", "mm/dd/yyyy", handleStartDateChange),
    getInputFeatures("End Date", "date", "mm/dd/yyyy", handleEndDateChange),
    getInputFeatures("Location", "text", "Enter location", handleLocationChange),
  ];

  const experienceFormFeatures = [
    getInputFeatures("Company Name", "text", "Enter company name", handleCompanyNameChange),
    getInputFeatures("Position Title", "text", "Enter position title", handlePositionTitleChange),
    getInputFeatures("Start Date", "date", "mm/dd/yyyy", handleStartDateCompanyChange),
    getInputFeatures("End Date", "date", "mm/dd/yyyy", handleEndDateCompanyChange),
    getInputFeatures("Location", "text", "Enter location", handleCompanyLocationChange),
    getInputFeatures("Description", "text", "Enter description", handleRoleDescriptionChange),
  ]

  

  function getInputComponents(featuresArray) {
    const componentsArray = featuresArray.map((item, index) => {
      return (
        <InputComponent
          key={index}
          labelName={item.labelName}
          type={item.type}
          placeholder={item.placeholder}
          handlerFunction={item.handlerFunction}
        />
      );
    });
    return componentsArray;
  }

  const personalInputsArray = getInputComponents(personalDetailsFormFeatures);

  const educationalInputsArray = getInputComponents(educationFormFeatures);

  const experienceInputsArray = getInputComponents(experienceFormFeatures)


  console.log(personalDetailsInfo);

  return (
    <>
      <FormComponent title={"Personal Details"}>
        {personalInputsArray}
      </FormComponent>
      <FormComponent title={"Education"}>
        {educationalInputsArray}
        {/* <button>+ EDUCATION</button> */}
      </FormComponent>
      <FormComponent title={"Experience"}>
        {experienceInputsArray}
        {/* <button>+ EXPERIENCE</button> */}
      </FormComponent>
      <Resume personalDetailsObject={personalDetailsInfo} educationObject={educationInfo} experienceObject={experienceInfo}/>  
    </>
  );
}

export default App;
