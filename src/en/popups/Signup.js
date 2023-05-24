import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Select from "react-select";

import ReactFlagsSelect from "react-flags-select";
import countryPhoneCodes from "../../assets/lib/PhoneCode";
import { useNavigate } from "react-router-dom";


const Signup = ({setSignupAsk}) => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");
    const handleSignup = () => {
        navigate("/phone-verifaction");
      };
  return (
    <>
        <form className>
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
    </>
  )
}

export default Signup