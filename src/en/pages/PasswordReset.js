import React, { useState } from "react";
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
import { Icon } from "@iconify/react";
const PasswordReset = () => {
  const [pswHide, setPswHide] = useState(true);
  const [rpswHide, setRpswHide] = useState(true);
  return (
    <div className="page">
      <Navbar />
      <div className="passwordReset">
        <div className="passwordResetContainer">
          <h2>Reset Password</h2>
          <form>
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
            <div className="submitButton">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PasswordReset;
