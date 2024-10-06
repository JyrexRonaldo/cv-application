import phoneIcon from "/phone.svg";
import emailIcon from "/email.svg";
import mapMarkerIcon from "/map-marker.svg";
import "../styles/Resume.css";

function Resume() {
  return (
    <>
      <div>
        <h1>Josephine Meyers</h1>
        <div>
          <div>
            <img src={emailIcon} alt="" />
            <p>josephine.meyers@mail.co.uk</p>
          </div>
          <div>
            <img src={phoneIcon} alt="" />
            <p>+44 3245 5521 5521</p>
          </div>
          <div>
            <img src={mapMarkerIcon} alt="" />
            <p>London, UK</p>
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
                  <p>08/2020 – present</p>
                  <p>New York City, US</p>
                </div>
                <div>
                  <h3>London City University</h3>
                  <p>Bachelors in Economics</p>
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
                  <p>08/2020 – present</p>
                  <p>New York City, US</p>
                </div>
                <div>
                  <h3>Umbrella Inc.</h3>
                  <p>UX & UI Designer</p>
                  <p>Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android</p>
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
