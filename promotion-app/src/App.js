import React, { useState } from "react";
import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  // State variables for form fields
  const [templeName, setTempleName] = useState("");
  const [location, setLocation] = useState("");
  const [templeType, setTempleType] = useState("");
  const [promotionDetails, setPromotionDetails] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [images, setImages] = useState([]);
  const [history, setHistory] = useState({
    whoMade: "",
    whenMade: "",
    scientificReason: "",
    prachinKatha: "",
    famousReason: "",
    specificAttacks: "",
    footFall: "",
    donations: "",
    yearlyEvents: "",
  });
  const [timing, setTiming] = useState("");
  const [aartiTiming, setAartiTiming] = useState("");
  const [captcha, setCaptcha] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log({
      templeName,
      location,
      templeType,
      promotionDetails,
      contactInfo,
      images,
      history,
      timing,
      aartiTiming,
      captcha,
    });
  };

  const handleRecaptchaChange = (value) => {
    setCaptcha(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="logo" />
        <h1>Holistic Harbor</h1>
      </header>
      <h2>Temple Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
        <div className="form-group"></div>
          <label htmlFor="templeName">Temple Name:</label>
          <input
            type="text"
            id="templeName"
            value={templeName}
            onChange={(e) => setTempleName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Geographical Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="templeType">Type of Temple:</label>
          <input
            type="text"
            id="templeType"
            value={templeType}
            onChange={(e) => setTempleType(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="promotionDetails">Promotion Details:</label>
          <textarea
            id="promotionDetails"
            value={promotionDetails}
            onChange={(e) => setPromotionDetails(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contactInfo">Contact Information:</label>
          <input
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <div style={{ flexBasis: "100%" }}></div>

        <div>
          <label htmlFor="whoMade">Who Made the Temple:</label>
          <input
            type="text"
            id="whoMade"
            value={history.whoMade}
            onChange={(e) =>
              setHistory({ ...history, whoMade: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="whenMade">Establishment Year:</label>
          <input
            type="text"
            id="whenMade"
            value={history.whenMade}
            onChange={(e) =>
              setHistory({ ...history, whenMade: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="scientificReason">
            Scientific Reason:
          </label>
          <input
            type="text"
            id="scientificReason"
            value={history.scientificReason}
            onChange={(e) =>
              setHistory({ ...history, scientificReason: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="prachinKatha">A Myth:</label>
          <input
            type="text"
            id="prachinKatha"
            value={history.prachinKatha}
            onChange={(e) =>
              setHistory({ ...history, prachinKatha: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="famousReason">Why Famous:</label>
          <input
            type="text"
            id="famousReason"
            value={history.famousReason}
            onChange={(e) =>
              setHistory({ ...history, famousReason: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="specificAttacks">
            Specific Attacks:
          </label>
          <input
            type="text"
            id="specificAttacks"
            value={history.specificAttacks}
            onChange={(e) =>
              setHistory({ ...history, specificAttacks: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="footFall">Foot-fall:</label>
          <input
            type="text"
            id="footFall"
            value={history.footFall}
            onChange={(e) =>
              setHistory({ ...history, footFall: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="donations"> Yearly Donations:</label>
          <input
            type="text"
            id="donations"
            value={history.donations}
            onChange={(e) =>
              setHistory({ ...history, donations: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="yearlyEvents">Yearly Events:</label>
          <input
            type="text"
            id="yearlyEvents"
            value={history.yearlyEvents}
            onChange={(e) =>
              setHistory({ ...history, yearlyEvents: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="timing">Temple Visit Timing:</label>
          <input
            type="text"
            id="timing"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="aartiTiming">Aarti Timing:</label>
          <input
            type="text"
            id="aartiTiming"
            value={aartiTiming}
            onChange={(e) => setAartiTiming(e.target.value)}
            required
          />
        </div>
        <div>
          <div style={{ flexBasis: "100%" }}></div>
          <label htmlFor="images">Upload Images:</label>
          <input
            type="file"
            id="images"
            onChange={(e) => setImages(Array.from(e.target.files))}
            multiple
          />
        </div>
        <div>
          <label htmlFor="captcha">Captcha Verification:</label>
          <ReCAPTCHA
            sitekey="6LdNzIEpAAAAAOlvZ6PWJP2gF-Se4BDd_ZG4PHYi"
            onChange={handleRecaptchaChange}
            required
          />
          <p>Please complete the captcha verification to submit the form.</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
