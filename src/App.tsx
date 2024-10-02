import { useState } from "react";
import "./App.css";
import { ButtonNext } from "./components/ButtonNext";
import { ButtonBack } from "./components/ButtonBack";
import { Step } from "./components/Step";
import { Separator } from "./components/Separator";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSeedling,
  faCompass,
  faRocket,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faCompass, faRocket, faSeedling, faTrophy);

function App() {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  const [level, setLevel] = useState("");
  const [challenge, setChallenge] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      const newTab = [...challenge, value];
      setChallenge(newTab);
    } else {
      const newTab = [...challenge].filter((element) => element !== value);
      setChallenge(newTab);
    }
  };

  return (
    <>
      <header>
        <h1>Join our Community of Developers</h1>
        <p>
          To join our community and participate in frontend challenges. Please
          fill out the following form.
        </p>
      </header>
      <main>
        <div className="steps">
          <Step num={1} step={step} />
          <Separator num={2} step={step} />
          <Step num={2} step={step} />
          <Separator num={3} step={step} />
          <Step num={3} step={step} />
          <Separator num={4} step={step} />
          <Step num={4} step={step} />
        </div>
        <hr />
        <form action="">
          {step !== 1 ? (
            ""
          ) : (
            <section className="step1">
              <div>
                <h2>Personal Information</h2>
                <p className="description">
                  Please provide your personal details so we can get to know you
                  better.
                </p>
              </div>
              <fieldset className="personalInfo">
                <label htmlFor="fullName">
                  Full Name
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name Surname"
                  />
                </label>
                <label htmlFor="email">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="name@email.com"
                  />
                </label>
                <label htmlFor="phone">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+91 1234567890"
                  />
                </label>
                <label htmlFor="url">
                  Portfolio / GitHub Link
                  <input
                    type="url"
                    name="url"
                    id="url"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    placeholder="github.com/yourname"
                  />
                </label>
              </fieldset>
            </section>
          )}
          {step !== 2 ? (
            ""
          ) : (
            <section className="step2">
              <div>
                <h2>Skill Level</h2>
                <p>
                  Please tell us about your skill level in frontend development.
                </p>
              </div>
              <fieldset className="level">
                <label htmlFor="beginner">
                  <input
                    type="radio"
                    name="level"
                    id="beginner"
                    value="Beginner"
                    checked={level === "Beginner"}
                    onChange={(event) => setLevel(event.target.value)}
                  />
                  <div className="radioName">
                    <div className="iconBg">
                      <FontAwesomeIcon icon={faSeedling} />
                    </div>
                    <span>Beginner</span>
                  </div>
                </label>
                <label htmlFor="intermediate">
                  <input
                    type="radio"
                    name="level"
                    id="intermediate"
                    value="Intermediate"
                    checked={level === "Intermediate"}
                    onChange={(event) => setLevel(event.target.value)}
                  />
                  <div className="radioName">
                    <div className="iconBg">
                      <FontAwesomeIcon icon={faCompass} />
                    </div>
                    <span>Intermediate</span>
                  </div>
                </label>
                <label htmlFor="advanced">
                  <input
                    type="radio"
                    name="level"
                    id="advanced"
                    value="Advanced"
                    checked={level === "Advanced"}
                    onChange={(event) => setLevel(event.target.value)}
                  />
                  <div className="radioName">
                    <div className="iconBg">
                      <FontAwesomeIcon icon={faRocket} />
                    </div>
                    <span>Advanced</span>
                  </div>
                </label>
                <label htmlFor="expert">
                  <input
                    type="radio"
                    name="level"
                    id="expert"
                    value="Expert"
                    checked={level === "Expert"}
                    onChange={(event) => setLevel(event.target.value)}
                  />
                  <div className="radioName">
                    <div className="iconBg">
                      <FontAwesomeIcon icon={faTrophy} />
                    </div>
                    <span>Expert</span>
                  </div>
                </label>
              </fieldset>
            </section>
          )}
          {step !== 3 ? (
            ""
          ) : (
            <section className="step3">
              <div>
                <h2>Challenge Preference</h2>
                <p>
                  Please tell us which frontend challenges you would like to
                  participate in.
                </p>
              </div>
              <fieldset className="challenge">
                <label htmlFor="html">
                  <input
                    type="checkbox"
                    name="challenge"
                    id="html"
                    value="HTML/CSS/JS"
                    onChange={handleChange}
                    checked={
                      challenge.find((elem) => elem === "HTML/CSS/JS")
                        ? true
                        : false
                    }
                  />
                  <span>HTML/CSS/JS</span>
                </label>
                <label htmlFor="reactJs">
                  <input
                    type="checkbox"
                    name="challenge"
                    id="reactJs"
                    value="ReactJs"
                    onChange={handleChange}
                    checked={
                      challenge.find((elem) => elem === "ReactJs")
                        ? true
                        : false
                    }
                  />
                  <span>ReactJs</span>
                </label>
                <label htmlFor="angularJs">
                  <input
                    type="checkbox"
                    name="challenge"
                    id="angularJs"
                    value="AngularJs"
                    onChange={handleChange}
                    checked={
                      challenge.find((elem) => elem === "AngularJs")
                        ? true
                        : false
                    }
                  />
                  <span>AngularJs</span>
                </label>
                <label htmlFor="vueJs">
                  <input
                    type="checkbox"
                    name="challenge"
                    id="vueJs"
                    value="Vue.js"
                    onChange={handleChange}
                    checked={
                      challenge.find((elem) => elem === "Vue.js") ? true : false
                    }
                  />
                  <span>Vue.js</span>
                </label>
              </fieldset>
            </section>
          )}
          {step !== 4 ? (
            ""
          ) : (
            <section className="step4">
              <div>
                <h2>Review and Confirm</h2>
                <p>
                  Please review your information to make sure everything is
                  accurate.
                </p>
              </div>
              <div className="container">
                <div>
                  <p>Full Name</p>
                  <p>{name}</p>
                </div>
                <div>
                  <p>Email Address</p>
                  <p>{email}</p>
                </div>
                <div>
                  <p>Phone Number</p>
                  <p>{phone}</p>
                </div>
                <div>
                  <p>Portfolio/Github Link</p>
                  <p>{url}</p>
                </div>
                <div>
                  <p>Skill Level</p>
                  <p>{level}</p>
                </div>
                <div>
                  <p>Challenge Preference</p>
                  <p>{challenge.join(", ")}</p>
                </div>
              </div>
            </section>
          )}
        </form>
        <hr />
        <div className="buttons">
          {step > 1 ? (
            <ButtonBack step={step} setStep={setStep} />
          ) : (
            <div></div>
          )}
          {step < 4 ? <ButtonNext step={step} setStep={setStep} /> : ""}
          {step === 4 ? <div className="submit">Submit</div> : ""}
        </div>
      </main>
    </>
  );
}

export default App;
