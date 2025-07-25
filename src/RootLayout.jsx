// import React, { useState, useEffect } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Sidebar from "./components/Sidebar/Sidebar.jsx";

// function RootLayout() {
//   const location = useLocation();
//   const noSidebarRoutes = ["/login", "/signin"];
//   const showSidebar = !noSidebarRoutes.includes(
//     location.pathname.toLowerCase()
//   );

//   return (
//     <div
//       style={{
//         backgroundColor: "var(--bg-color)",
//         color: "var(--text-color)",
//       }}
//       className="fixed flex h-screen w-full font-inter"
//     >
//       {showSidebar && <Sidebar selected={"Dashboard"} />}
//       <main className={`w-full ${showSidebar ? "20px" : "0"}`}>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default RootLayout;

import React, { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { ThemeContext } from "./context/ThemeContext";

function RootLayout() {

  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const noSidebarRoutes = ["/login", "/signin"];
  const showSidebar = !noSidebarRoutes.includes(
    location.pathname.toLowerCase()
  );


   const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
      className="fixed flex h-screen w-full font-inter"
    >
      {/* Sidebar component */}
      {/* {showSidebar && <Sidebar selected={"Dashboard"} />} */}

      {showSidebar &&(
        <Sidebar isOpen ={sidebarOpen} toggleSidebar={toggleSidebar}/>
      )}
      <main className={`w-full ${showSidebar ? "20px" : "0"}`}>
         {showSidebar && (
          <button
            className={`sm:hidden fixed top-4 left-4 z-50 ${theme === 'light'? 'bg-white' : 'bg-[#B0A2DA]'} p-2 rounded shadow`}
            onClick={toggleSidebar}
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
        )}
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
