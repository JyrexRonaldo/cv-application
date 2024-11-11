import styles from "./App.module.css";
import { Resume } from "../ResumeComponent/ResumeComponent";
import { FormComponent } from "../FormComponent/FormComponent";
import { InputComponent } from "../InputComponent/InputComponent";
import { useState } from "react";

function App() {
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

  const [educationInfo, setEducationInfo] = useState({
    placeOfStudy: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    eduKey: self.crypto.randomUUID(),
  });

  const getUniqueEduId = () => {
    if (eduEditState.editId !== "") {
      return eduEditState.editId;
    } else {
      return self.crypto.randomUUID();
    }
  };

  const resetEducationInfo = () => {
    setEducationInfo({
      placeOfStudy: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      eduKey: getUniqueEduId(),
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

  const [educationArray, setEducationArray] = useState([]);

  const handleEducationSubmit = () => {
    for (const key in educationInfo) {
      if (educationInfo[key].trim() === "") {
        return;
      }
    }
    let editedEducationArray = null;

    if (eduEditState.editStatus === true) {
      editedEducationArray = educationArray.map((item) => {
        if (item.eduKey === eduEditState.editId) {
          return educationInfo;
        } else {
          return item;
        }
      });
      setEducationArray(editedEducationArray);
      setEduEditState({ editStatus: false, editId: "" });
    } else {
      setEducationArray([...educationArray, educationInfo]);
    }

    resetEducationInfo();
  };

  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    expKey: self.crypto.randomUUID(),
  });

  const getUniqueExpId = () => {
    if (expEditState.editId !== "") {
      return expEditState.editId;
    } else {
      return self.crypto.randomUUID();
    }
  };

  const resetExperienceInfo = () => {
    setExperienceInfo({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      expKey: getUniqueExpId(),
    });
  };

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

  const [experienceArray, setExperienceArray] = useState([]);

  const handleExperienceSubmit = () => {
    for (const key in experienceInfo) {
      if (experienceInfo[key].trim() === "") {
        return;
      }
    }
    let editedExperienceArray = null;

    if (expEditState.editStatus === true) {
      editedExperienceArray = experienceArray.map((item) => {
        if (item.expKey === expEditState.editId) {
          return experienceInfo;
        } else {
          return item;
        }
      });
      setExperienceArray(editedExperienceArray);
      setExpEditState({ editStatus: false, editId: "" });
    } else {
      setExperienceArray([...experienceArray, experienceInfo]);
    }

    resetExperienceInfo();
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

  const personalDetailsFormAttributes = [
    getInputAttributes(
      "Full Name",
      "text",
      "First and last name",
      personalDetailsInfo.name,
      handleNameChange
    ),
    getInputAttributes(
      "Email",
      "email",
      "Enter email",
      personalDetailsInfo.email,
      handleEmailChange
    ),
    getInputAttributes(
      "Phone number",
      "tel",
      "Enter phone number",
      personalDetailsInfo.phoneNumber,
      handlePhoneNumberChange
    ),
    getInputAttributes(
      "Address",
      "text",
      "Enter address",
      personalDetailsInfo.address,
      handleAddressChange
    ),
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
      "text",
      "mm/yyyy",
      educationInfo.startDate,
      handleStartDateChange
    ),
    getInputAttributes(
      "End Date",
      "text",
      "mm/yyyy",
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
      "text",
      "mm/yyyy",
      experienceInfo.startDate,
      handleStartDateCompanyChange
    ),
    getInputAttributes(
      "End Date",
      "text",
      "mm/yyyy",
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

  const [eduEditState, setEduEditState] = useState({
    editStatus: false,
    editId: "",
  });
  const [expEditState, setExpEditState] = useState({
    editStatus: false,
    editId: "",
  });

  const handleExpEdit = (e) => {
    const btnKey = e.target.getAttribute("data-buttonid");
    setExpEditState({ editStatus: true, editId: btnKey });
  };

  const handleEduEdit = (e) => {
    const btnKey = e.target.getAttribute("data-buttonid");
    setEduEditState({ editStatus: true, editId: btnKey });
  };

  return (
    <main className={styles.main}>
      <div>
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
          <button type="button" onClick={handleExperienceSubmit}>
            + EXPERIENCE
          </button>
        </FormComponent>
      </div>
      <Resume
        personalDetailsObject={personalDetailsInfo}
        educationObject={educationArray}
        experienceObject={experienceArray}
        eduEditHandler={handleEduEdit}
        expEditHandler={handleExpEdit}
      />
    </main>
  );
}

export default App;
