import React, { useState } from "react";

const Scrollup = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-top-button ${showButton ? "show" : "hide"}`}
      onClick={scrollTop}
    >
      Scroll to top
    </button>
  );
};

export default Scrollup;
