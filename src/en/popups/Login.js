import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Select from "react-select";
import ReactFlagsSelect from "react-flags-select";
import countryPhoneCodes from "../../assets/lib/PhoneCode";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoginPopup, signupDemand }) => {
  const [pswHide, setPswHide] = useState(true);
  const [selected, setSelected] = useState("");
  const [signupAsk, setSignupAsk] = useState(signupDemand);
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/phone-verifaction");
  };
  return (
    <>
      <div className="darkBG" onClick={() => setLoginPopup(false)} />
      <div className="modalLogin centered z-100">
        <Icon
          icon="material-symbols:close-rounded"
          onClick={() => setLoginPopup(false)}
        />
        <form className={signupAsk ? "disable" : ""}>
          <div className="logo importantText">Souq Al Fajr</div>
          <h3>Welcome !</h3>
          <p>Login to enjoy the features of the application</p>
          <div className="inputs">
            <div className="phoneNumWrapper input">
              <div className="selectWrapper">
                <ReactFlagsSelect
                searchable
                  onSelect={(code) => setSelected(code)}
                  selected={selected}
                  customLabels={countryPhoneCodes}
                  placeholder="Phone Code"
                />
              </div>

              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
              />
            </div>
            <div className="input2">
              <div className="inputField">
                <Icon icon="mdi:password-outline" />
                <input
                  type={pswHide ? "password" : "text"}
                  placeholder="Confirm password"
                />
                <Icon
                  icon={pswHide ? "mdi:eye-outline" : "mdi:eye-off-outline"}
                  onClick={() => setPswHide(!pswHide)}
                />
              </div>
              <a href="/password-reset">Forgot Password?</a>
            </div>
          </div>
          <button type="submit" className="submit">
            Login
          </button>
          <div className="signup">
            Do not have an account ?{" "}
            <a href="#" onClick={() => setSignupAsk(true)}>
              Sign up
            </a>
          </div>
        </form>
        <form className={signupAsk ? "" : "disable"}>
          <div className="logo importantText">Souq Al Fajr</div>
          <h3>Welcome !</h3>
          <p>Welcome !, Please enter your phone number </p>
          <div className="inputs">
            <div className="phoneNumWrapper input">
              <div className="selectWrapper">
                <ReactFlagsSelect
                searchable 
                  onSelect={(code) => setSelected(code)}
                  selected={selected}
                  customLabels={countryPhoneCodes}
                  placeholder="Phone Code"
                />
              </div>

              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <button
            type="submit"
            className="submit"
            onClick={() => handleSignup()}
          >
            Sign up
          </button>
          <div className="signup">
            Already have an account ?{" "}
            <a href="#" onClick={() => setSignupAsk(false)}>
              Sign in
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
