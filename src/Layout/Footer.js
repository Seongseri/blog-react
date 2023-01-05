import React, { useState, useEffect } from "react";
import "../css/footer.css";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <footer>
      <div className="max-width">
        <button className="top-button" onClick={scrollToTop} />
      </div>
    </footer>
  );
};

export default Footer;
