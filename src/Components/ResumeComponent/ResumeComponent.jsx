import phoneIcon from "/phone.svg";
import emailIcon from "/email.svg";
import mapMarkerIcon from "/map-marker.svg";
import "./ResumeComponent.css";


function Resume({
  personalDetailsObject,
  educationObject,
  experienceObject,
  eduEditHandler,
  expEditHandler,
}) {
  const educationStructure = educationObject.map((item) => {
    return (
      <li key={item.eduKey}>
        <div>
          <div>
            <p>
              {item.startDate} – {item.endDate}
            </p>
            <p>{item.location}</p>
          </div>
          <div>
            <h3>{item.placeOfStudy}</h3>
            <p>{item.degree}</p>
          </div>
        </div>
        <button data-buttonId={item.eduKey} onClick={eduEditHandler}>
          Edit
        </button>
      </li>
    );
  });

  const experienceStructure = experienceObject.map((item) => {
    return (
      <li key={item.expKey}>
        <div>
          <div>
            <p>
              {item.startDate} – {item.endDate}
            </p>
            <p>{item.location}</p>
          </div>
          <div>
            <h3>{item.companyName}</h3>
            <p>{item.positionTitle}</p>
            <p>{item.description}</p>
          </div>
        </div>
        <button data-buttonId={item.expKey} onClick={expEditHandler}>
          Edit
        </button>
      </li>
    );
  });

  return (
    <>
      <div>
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
      <div>
        <h2>Education</h2>
        <div>
          <ul>{educationStructure}</ul>
        </div>
      </div>
      <div>
        <h2>Professional Experience</h2>
        <div>
          <ul>{experienceStructure}</ul>
        </div>
      </div>
    </>
  );
}

export { Resume };
