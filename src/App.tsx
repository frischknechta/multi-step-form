import { useState } from "react";
import "./App.css";
import { ButtonNext } from "./components/ButtonNext";
import { ButtonBack } from "./components/ButtonBack";
import { Step } from "./components/Step";
import { Separator } from "./components/Separator";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
                <input
                  type="radio"
                  name="level"
                  id="beginner"
                  value="beginner"
                  checked={level === "beginner"}
                  onChange={(event) => setLevel(event.target.value)}
                />
                <label htmlFor="beginner">Beginner</label>
                <input
                  type="radio"
                  name="level"
                  id="intermediate"
                  value="intermediate"
                  checked={level === "intermediate"}
                  onChange={(event) => setLevel(event.target.value)}
                />
                <label htmlFor="intermediate">Intermediate</label>
                <input
                  type="radio"
                  name="level"
                  id="advanced"
                  value="advanced"
                  checked={level === "advanced"}
                  onChange={(event) => setLevel(event.target.value)}
                />
                <label htmlFor="advanced">Advanced</label>
                <input
                  type="radio"
                  name="level"
                  id="expert"
                  value="expert"
                  checked={level === "expert"}
                  onChange={(event) => setLevel(event.target.value)}
                />
                <label htmlFor="expert">Expert</label>
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
                <input
                  type="checkbox"
                  name="challenge"
                  id="html"
                  value="html"
                  onChange={handleChange}
                />
                <label htmlFor="html">HTML/CSS/JS</label>
                <input
                  type="checkbox"
                  name="challenge"
                  id="reactJs"
                  value="reactJs"
                  onChange={handleChange}
                />
                <label htmlFor="reactJs">ReactJs</label>
                <input
                  type="checkbox"
                  name="challenge"
                  id="angularJs"
                  value="angularJs"
                  onChange={handleChange}
                />
                <label htmlFor="angularJs">AngularJs</label>
                <input
                  type="checkbox"
                  name="challenge"
                  id="vueJs"
                  value="vueJs"
                  onChange={handleChange}
                />
                <label htmlFor="vueJs">Vue.js</label>
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
              <div>
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
              </div>
              <div>
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
                  <p>{challenge}</p>
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
        </div>
      </main>
    </>
  );
}

export default App;
