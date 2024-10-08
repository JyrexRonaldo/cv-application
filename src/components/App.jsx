// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import "../styles/App.css";
import { Resume } from "./Resume";
import { FormComponent } from "./FormComponent";
import { InputComponent } from "./InputComponent";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)

  const [personalDetailsInfo, setPersonalDetailsInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleNameChange = (e) => {
    setPersonalDetailsInfo({ ...personalDetailsInfo, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setPersonalDetailsInfo({ ...personalDetailsInfo, email: e.target.value });
  };

  const handlePhoneNumberChange = (e) => {
    setPersonalDetailsInfo({
      ...personalDetailsInfo,
      phoneNumber: e.target.value,
    });
  };

  const handleAddressChange = (e) => {
    setPersonalDetailsInfo({ ...personalDetailsInfo, address: e.target.value });
  };

  const getInputAttributes = (
    labelName,
    type,
    placeholder,
    value,
    handlerFunction
  ) => {
    return { labelName, type, placeholder, value, handlerFunction };
  };

  const [educationInfo, setEducationInfo] = useState({
    placeOfStudy: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const resetEducationInfo = () => {
    setEducationInfo({
      placeOfStudy: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const handlePlaceChange = (e) => {
    setEducationInfo({ ...educationInfo, placeOfStudy: e.target.value });
  };

  const handleDegreeChange = (e) => {
    setEducationInfo({ ...educationInfo, degree: e.target.value });
  };

  const handleStartDateChange = (e) => {
    setEducationInfo({ ...educationInfo, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    setEducationInfo({ ...educationInfo, endDate: e.target.value });
  };

  const handleLocationChange = (e) => {
    setEducationInfo({ ...educationInfo, location: e.target.value });
  };

  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });


  const resetExperienceInfo = () => {
    setExperienceInfo({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    })
  }

  const handleCompanyNameChange = (e) => {
    setExperienceInfo({ ...experienceInfo, companyName: e.target.value });
  };

  const handlePositionTitleChange = (e) => {
    setExperienceInfo({ ...experienceInfo, positionTitle: e.target.value });
  };

  const handleStartDateCompanyChange = (e) => {
    setExperienceInfo({ ...experienceInfo, startDate: e.target.value });
  };

  const handleEndDateCompanyChange = (e) => {
    setExperienceInfo({ ...experienceInfo, endDate: e.target.value });
  };

  const handleCompanyLocationChange = (e) => {
    setExperienceInfo({ ...experienceInfo, location: e.target.value });
  };

  const handleRoleDescriptionChange = (e) => {
    setExperienceInfo({ ...experienceInfo, description: e.target.value });
  };

  const [educationArray, setEducationArray] = useState([]);

  const handleEducationSubmit = () => {
    console.log("hi");
    for (const key in educationInfo) {
      if (educationInfo[key].trim() === "") {
        return;
      }
    }

    setEducationArray([...educationArray, educationInfo]);
    resetEducationInfo();

    console.log(educationArray);
  };

  const [experienceArray, setExperienceArray] = useState([])

  const handleExperienceSubmit = () => {
    for (const key in experienceInfo) {
      if (experienceInfo[key].trim() === "") {
        return
      }
    }

    setExperienceArray([...experienceArray, experienceInfo])
    resetExperienceInfo()

    console.log(experienceArray)
  }

  // console.log(getInputAttributes("Email", "text", "Yuh is my driver"));

  const personalDetailsFormAttributes = [
    getInputAttributes(
      "Full Name",
      "text",
      "First and last name",
      handleNameChange
    ),
    getInputAttributes("Email", "email", "Enter email", handleEmailChange),
    getInputAttributes(
      "Phone number",
      "tel",
      "Enter phone number",
      handlePhoneNumberChange
    ),
    getInputAttributes("Address", "text", "Enter address", handleAddressChange),
  ];

  const educationFormAttributes = [
    getInputAttributes(
      "Place of study",
      "text",
      "Enter place of study",
      educationInfo.placeOfStudy,
      handlePlaceChange
    ),
    getInputAttributes(
      "Degree",
      "text",
      "Enter degree",
      educationInfo.degree,
      handleDegreeChange
    ),
    getInputAttributes(
      "Start Date",
      "date",
      "mm/dd/yyyy",
      educationInfo.startDate,
      handleStartDateChange
    ),
    getInputAttributes(
      "End Date",
      "date",
      "mm/dd/yyyy",
      educationInfo.endDate,
      handleEndDateChange
    ),
    getInputAttributes(
      "Location",
      "text",
      "Enter location",
      educationInfo.location,
      handleLocationChange
    ),
  ];

  const experienceFormAttributes = [
    getInputAttributes(
      "Company Name",
      "text",
      "Enter company name",
      experienceInfo.companyName,
      handleCompanyNameChange
    ),
    getInputAttributes(
      "Position Title",
      "text",
      "Enter position title",
      experienceInfo.positionTitle,
      handlePositionTitleChange
    ),
    getInputAttributes(
      "Start Date",
      "date",
      "mm/dd/yyyy",
      experienceInfo.startDate,
      handleStartDateCompanyChange
    ),
    getInputAttributes(
      "End Date",
      "date",
      "mm/dd/yyyy",
      experienceInfo.endDate,
      handleEndDateCompanyChange
    ),
    getInputAttributes(
      "Location",
      "text",
      "Enter location",
      experienceInfo.location,
      handleCompanyLocationChange
    ),
    getInputAttributes(
      "Description",
      "text",
      "Enter description",
      experienceInfo.description,
      handleRoleDescriptionChange
    ),
  ];

  function getInputComponents(featuresArray) {
    const componentsArray = featuresArray.map((item, index) => {
      return (
        <InputComponent
          key={index}
          labelName={item.labelName}
          type={item.type}
          placeholder={item.placeholder}
          value={item.value}
          handlerFunction={item.handlerFunction}
        />
      );
    });
    return componentsArray;
  }

  const personalInputsArray = getInputComponents(personalDetailsFormAttributes);

  const educationalInputsArray = getInputComponents(educationFormAttributes);

  const experienceInputsArray = getInputComponents(experienceFormAttributes);

  console.log(personalDetailsInfo);

  console.log(educationArray);

  console.log(experienceArray);

  return (
    <>
      <FormComponent title={"Personal Details"}>
        {personalInputsArray}
      </FormComponent>
      <FormComponent title={"Education"}>
        {educationalInputsArray}
        <button type="button" onClick={handleEducationSubmit}>
          + EDUCATION
        </button>
      </FormComponent>
      <FormComponent title={"Experience"}>
        {experienceInputsArray}
        <button type="button" onClick={handleExperienceSubmit}>+ EXPERIENCE</button>
      </FormComponent>
      <Resume
        personalDetailsObject={personalDetailsInfo}
        educationObject={educationInfo}
        experienceObject={experienceInfo}
      />
    </>
  );
}

export default App;
