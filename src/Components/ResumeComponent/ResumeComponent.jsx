import phoneIcon from "/phone.svg";
import emailIcon from "/email.svg";
import mapMarkerIcon from "/map-marker.svg";
import styles from "./ResumeComponent.module.css";
import { Fragment } from "react";

function Resume({
  personalDetailsObject,
  educationObject,
  experienceObject,
  eduEditHandler,
  expEditHandler,
}) {
  const educationStructure = educationObject.map((item) => {
    return (
      <Fragment key={item.eduKey}>
        <li>
          <div>
            <div>
              <h3>{item.location}</h3>
              <p>
                {item.startDate} – {item.endDate}
              </p>
            </div>
            <div>
              <h3 className={styles.orgName}>{item.placeOfStudy}</h3>
              <p>{item.degree}</p>
            </div>
          </div>
        </li>
        <button data-buttonid={item.eduKey} onClick={eduEditHandler}>
          Edit
        </button>
      </Fragment>
    );
  });

  const experienceStructure = experienceObject.map((item) => {
    return (
      <Fragment key={item.expKey}>
        <li>
          <div>
            <div>
              <h3>{item.location}</h3>
              <p>
                {item.startDate} – {item.endDate}
              </p>
            </div>
            <div>
              <h3 className={styles.orgName}>{item.companyName}</h3>
              <p>{item.positionTitle}</p>
              <p>{item.description}</p>
            </div>
          </div>
        </li>
        <button data-buttonid={item.expKey} onClick={expEditHandler}>
          Edit
        </button>
      </Fragment>
    );
  });

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.personalDetailSection}>
        <h1>{personalDetailsObject.name}</h1>
        <div>
          <div>
            <img src={emailIcon} alt="" />
            <p>{personalDetailsObject.email}</p>
          </div>
          <div>
            <img src={phoneIcon} alt="" />
            <p>{personalDetailsObject.phoneNumber}</p>
          </div>
          <div>
            <img src={mapMarkerIcon} alt="" />
            <p>{personalDetailsObject.address}</p>
          </div>
        </div>
      </div>
      <div className={styles.educationSection}>
        <h2>Education</h2>
        <ul>{educationStructure}</ul>
      </div>
      <div className={styles.experienceSection}>
        <h2>Professional Experience</h2>
        <ul>{experienceStructure}</ul>
      </div>
    </div>
  );
}

export { Resume };
