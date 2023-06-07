import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../../assets/images/logo/logo.png";
import footerBg from "../../../assets/images/banner/footer imgae.png";


const Footer = () => {
  return (
    <div
      className="w-full banner-bg text-white "
      style={{
        backgroundImage: `url("${footerBg}")`,
      }}
    >
      <div className="">
        <footer className="mx-auto lg:max-w-7xl mt-20 grid lg:grid-cols-4 px-4 justify-between footer py-10">
          <div className="">
            <img className="w-40" src={logo} alt="" draggable="false" />
            <p className="text-lg">
              Quisque quis dignissim elit. Aliquam et augue aliquet orci maximus
              convallis id vitae augue. Phasellus elementum commodo aliquet.
            </p>
          </div>
          <div className="">
            {" "}
            <span className="footer-title">Services</span>
            <a href="" className="text-lg ">
              Branding
            </a>
            <a href="" className="text-lg ">
              Design
            </a>
            <a href="" className="text-lg ">
              Marketing
            </a>
            <a href="" className="text-lg ">
              Advertisement
            </a>
          </div>

          <div className="">
            <span className="footer-title uppercase ">Legal</span>
            <li href="" className="text-lg list-none">
              Terms of use
            </li>
            <li href="" className="text-lg list-none">
              Privacy policy
            </li>
            <li href="" className="text-lg list-none">
              Cookie policy
            </li>
          </div>
          <div className="">
            <span className="footer-title">CONTACT INFO</span>
            <li href="" className="text-lg flex">
              <p className="text-slate-500 mr-3">
                <FaMapMarkerAlt />
              </p>{" "}
              <p>04360, NewYork, 33 Matehouse str., 12/4</p>
            </li>
            <li href="" className="text-lg flex">
              <p className="text-slate-500 mr-3">
                {" "}
                <FaPhoneAlt />
              </p>{" "}
              <p>803-33-5644-99</p>
            </li>
            <li href="" className="text-lg flex">
              <p className="text-slate-500 mr-3">
                <FaEnvelope />
              </p>{" "}
              <p> music@info.com</p>
            </li>
            <li href="" className="text-3xl flex">
              <a href="">
                {" "}
                <FaFacebook className="mr-4" />
              </a>
              <a href="">
                {" "}
                <FaTwitter className="mr-4" />
              </a>
              <a href="">
                <FaInstagram className="mr-4" />
              </a>
              <a href="">
                <FaLinkedin className="mr-4" />
              </a>
            </li>
          </div>
        </footer>
        <div className="footer footer-center pb-4 ">
          <p>
            Copyright © 2023 - All right reserved by Esatman School of Music
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
