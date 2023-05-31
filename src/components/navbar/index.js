import React, { useState } from "react";
import Button from "../button";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const getNavLinkClass = (path) =>
    location.pathname === path ? "active" : null;

  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleNavButton = () => {
    setIsButtonActive(!isButtonActive);
  };

  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Login",
      path: "/login",
    },
  ];
  return (
    <header>
      <nav className="fixed w-full bg-white shadow-sm ">
        <div className="container relative flex items-center justify-between p-4">
          <h3 className="text-2xl font-bold">Ngeblog.</h3>
          <div
            className={`nav-menu bg-white ${isButtonActive ? "active" : ""}`}
          >
            {links.map((link, index) => (
              <Button
                isLink
                path={link.path}
                label={link.label}
                key={index}
                className={`nav-link  ${getNavLinkClass(link.path)}`}
              />
            ))}
            <Button
              isLink
              isButton
              isPrimary
              isBlock
              className="w-full text-center sm:w-fit"
              label="Get Started"
              path="/register"
            />
          </div>
          <div
            className={`nav-button ${isButtonActive ? "active" : ""}`}
            onClick={() => {
              handleNavButton();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
