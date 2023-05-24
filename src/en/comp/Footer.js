import React, {useState} from "react";
import { Icon } from "@iconify/react";
import googlePlay from "../../assets/img/googlePlay.png";
import appStore from "../../assets/img/appStore.png";
import Login from "../popups/Login";


const Footer = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="about">
          <div className="footerLogo">Souq Al Fajr</div>
          <p>
            Souq Al Fajr is an application that enables you to search and
            purchase products from local markets, or pre-order products from the
            supplier with delivery of fresh products{" "}
          </p>
        </div>
        <div className="footerLinks">
          <div className="socialMedia">
            <a className="socialMediaItem" href="#">
              <Icon icon="ant-design:linkedin-filled" />
            </a>
            <a className="socialMediaItem" href="#">
              <Icon icon="ant-design:facebook-filled" />
            </a>
            <a className="socialMediaItem" href="#">
              <Icon icon="ant-design:twitter-square-filled" />
            </a>
            <a className="socialMediaItem" href="#">
              <Icon icon="ant-design:instagram-filled" />
            </a>
            <a className="socialMediaItem" href="#">
              <img src={googlePlay} />
            </a>
            <a className="socialMediaItem" href="#">
              <img src={appStore} />
            </a>
          </div>
          <div className="links">
            <a href="#">AR</a>
            <a  onClick={()=>setLoginPopup(true)}>Sign up</a>
            <a href="/about-us">About us</a>
          </div>
          <div className="rights">
            <p>All right reserved for شركة حراج الفجر التجارية</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
      {loginPopup && (
        <Login setLoginPopup={setLoginPopup} signupDemand={true} />
      )}
    </div>
  );
};

export default Footer;
