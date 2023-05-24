import React, { useState } from "react";
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";
import { Icon } from "@iconify/react";

import BasicSelect from "../comp/SelectCustom.js";

const cityOptions = [
  {key: 1, label: "opt1"},
  {key: 2, label: "opt2"},
]
const Register = () => {
  const [pswHide, setPswHide] = useState(true);
  const [rpswHide, setRpswHide] = useState(true);
  const [citySelect, setCitySelect] = useState(false)
  const [codeSelect, setCodeSelect] = useState(false)
  return (
    <div>
      <Navbar />
      <div className="register">
        <div className="registerContainer">
          <h2>Fill Information</h2>
          <p>Please fill in the informations to create an account</p>
          <form>
            <div className="registerInputs">
              <div className="inputField">
                <Icon icon="ph:user-light" />
                <input type={"text"} placeholder="First Name" />
              </div>
              <div className="inputField">
                <Icon icon="ph:user-light" />
                <input type={"text"} placeholder="Last Name" />
              </div>
              <div className="inputField">
                <Icon icon="ic:outline-email" />
                <input type={"text"} placeholder="Email" />
              </div>
              <div className="inputField">
                <Icon icon="material-symbols:location-on-outline" />
                <BasicSelect label="Select delivery city" options={cityOptions} icon="material-symbols:location-on-outline" />
              </div>
              <div className="inputField">
                <Icon icon="mdi:password-outline" />
                <input
                  type={pswHide ? "password" : "text"}
                  placeholder="Password"
                />
                <Icon
                  icon={pswHide ? "mdi:eye-outline" : "mdi:eye-off-outline"}
                  onClick={() => setPswHide(!pswHide)}
                />
              </div>
              <div className="inputField">
                <Icon icon="mdi:password-outline" />
                <input
                  type={rpswHide ? "password" : "text"}
                  placeholder="Confirm password"
                />
                <Icon
                  icon={rpswHide ? "mdi:eye-outline" : "mdi:eye-off-outline"}
                  onClick={() => setRpswHide(!rpswHide)}
                />
              </div>
              <div className="inputField">
                <Icon icon="material-symbols:location-on-outline" />
                <BasicSelect label="Referral code" options={cityOptions} icon="material-symbols:location-on-outline" />
              </div>
            </div>
            <div className="submit">
              <div className="submitCheck">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  className="custom-checkbox"
                />
                <label htmlFor="termsCheckbox" className="checkbox-label">
                  <span className="checkbox-custom"></span>I Agree on{" "}
                  <a href="#" className="importantText">
                    terms and conditions
                  </a>
                </label>
              </div>

              <div className="submitButton">
                <button type="submit">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
