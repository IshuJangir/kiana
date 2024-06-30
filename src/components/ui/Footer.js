// Footer.js

import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-5 w-[100vw]">
      <div className="container mx-auto py-10 px-4 flex flex-col">
        <div className="flex justify-center mb-8 ">
          <a href="#" className="text-white hover:bg-gray-800 rounded-full p-2 ">
            <i className="fab fa-facebook"><TiSocialFacebook className='h-7 w-7' /></i>
          </a>
          <a href="https://www.instagram.com/kianainteriors?igsh=MWhxcTYzMmp2cnlxcg==" className="text-white hover:bg-gray-800 rounded-full p-2">
            <i className="fab fa-instagram"><SlSocialInstagram className='h-7 w-7' /></i>
          </a>
          <a href="#" className="text-white hover:bg-gray-800 rounded-full p-2">
            <i className="fab fa-twitter"><TiSocialTwitter className='h-7 w-7' /></i>
          </a>
          <a href="#" className="text-white hover:bg-gray-800 rounded-full p-2">
            <i><TiSocialLinkedin className='h-7 w-7' /></i>
          </a>
          <a href="#" className="text-white hover:bg-gray-800 rounded-full p-2">
            <i className="fab fa-youtube"><FaYoutube className='h-7 w-7' /></i>
          </a>
        </div>
        <div className="text-center mb-6 flex items-center justify-center ">
          <ul className="flex justify-between max-w-[30%] gap-5">
            <li><a href="#" className="text-white hover:opacity-100">Home</a></li>
            <li><a href="#" className="text-white hover:opacity-100">About</a></li>
            <li><a href="contact" className="text-white hover:opacity-100">Contact</a></li>
            <li><a href="team" className="text-white hover:opacity-100">Team</a></li>
          </ul>
        </div>
        <div className="text-center">
          <p className="text-white">&copy;2024; Designed by <span className="opacity-75">Ishu Jangid</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
