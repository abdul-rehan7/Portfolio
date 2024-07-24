// import React from "react";

// window.addEventListener("load", function() {
//     var loader = document.querySelector("#loader") as HTMLElement;
//     if (loader) {
//         loader.style.display = "none";
//     }
// });

// const Loader = () => {
//   return (
//     <div>
//       <div
//         id="loader"
//         className="flex justify-center items-center  h-[100vh] w-[100vw] bg-black fixed z-[2000]"
//       >
//         <div className="lds-dual-ring"></div>
//       </div>
//     </div>
//   );
// };

// export default Loader;

import React from "react";

const Loader = () => {
  React.useEffect(() => {
    const loader = document.getElementById("loader");

    if (loader) {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 1s ease-out";
        setTimeout(() => {
          loader.style.display = "none";
        }, 1500); // Match the timeout with the transition duration
      }, 1500); // Loader disappears after 2 seconds
    }
  }, []);

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

