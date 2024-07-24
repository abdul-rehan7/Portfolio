import React from "react";

window.addEventListener("load", function() {
    var loader = document.querySelector("#loader") as HTMLElement;
    if (loader) {
        loader.style.display = "none";
    }
    
});

const Loader = () => {
  return (
    <div>
      <div
        id="loader"
        className="flex justify-center items-center  h-[100vh] w-[100vw] bg-black fixed z-[2000]"
      >
        <div className="lds-dual-ring"></div>
      </div>
    </div>
  );
};

export default Loader;
