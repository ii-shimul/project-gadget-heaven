import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 max-sm:pt-10">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold max-sm:text-3xl">Gadget Heaven</h1>
        <p className="font-bold opacity-50 max-sm:text-sm">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div class="divider"></div>
      <footer className="footer text-base-content p-10 flex justify-around">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
