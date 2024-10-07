import phoneIcon from "/phone.svg";
import emailIcon from "/email.svg";
import mapMarkerIcon from "/map-marker.svg";
import "../styles/Resume.css";

function Resume({personalDetailsObject, educationObject, experienceObject}) {

    console.log(personalDetailsObject)
    console.log(educationObject)
    console.log(experienceObject)
  return (
    <>
      <div>
        <h1>{personalDetailsObject.name}
        </h1>
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
          <ul>
            <li>
              <div>
                <div>
                  <p>{educationObject.startDate} – {educationObject.endDate}</p>
                  <p>{educationObject.location}</p>
                </div>
                <div>
                  <h3>{educationObject.placeOfStudy}</h3>
                  <p>{educationObject.degree}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Professional Experience</h2>
        <div>
          <ul>
            <li>
              <div>
                <div>
                  <p>{experienceObject.startDate} – {experienceObject.endDate}</p>
                  <p>{experienceObject.location}</p>
                </div>
                <div>
                  <h3>{experienceObject.companyName}</h3>
                  <p>{experienceObject.positionTitle}</p>
                  <p>{experienceObject.description}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export { Resume };
