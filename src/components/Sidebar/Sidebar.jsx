// import React from "react";
// import webIcons from "../../assets/images";
// import { useNavigate } from "react-router-dom";
// // import { ThemeContext } from "../../context/ThemeContext";


// const Sidebar = () => {

//   // const { theme } = useContext(ThemeContext);

//   const navigate = useNavigate();
//   const navMenu = [
//     { name: "Dashboard", path: "/dashboard", ico: webIcons.dashboardIco },
//   ];

//     const handleLogout = () => {
//     // You can add actual logout logic here (e.g., clearing auth token, redirect)
//     console.log("User logged out");
//     navigate('/login') // Redirect to login page after logout
//   };

//   return (
//     <div className="w-2xs border-r border-gray-200 flex flex-col justify-between h-screen">
//       <div className="p-10 w-[280px]">
//         <img src={webIcons.logo} alt="" />
//         <div className="flex flex-col gap-5 mt-10">
//           {navMenu.map((menu) => (
//             <div className="flex gap-2 bg-[var(--main-component-color)] py-3 px-5 rounded-xl text-white font-bold -tracking-tighter cursor-pointer">
//               <img src={menu.ico} alt="" /> {menu.name}
//             </div>
//           ))}
//         </div>
//       </div>
//        {/* Bottom: User Profile + Logout */}
//       <div className="p-6  border-gray-200">
//         <div className="flex items-center gap-4 mb-4">
//           <img
//             src={webIcons.subDoneIco}
//             alt="User Avatar"
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div className="text-sm">
//             <p className="font-bold text-gray-800">Md Sifat Islam</p>
//             <p className="text-gray-500">sifat@gmail.com</p>
//           </div>
//         </div>
//         <button
//           onClick={handleLogout}
//           className="w-full text-sm font-semibold text-[#B0A2DA] py-2 rounded-lg border border-[#B0A2DA] hover:bg-[#B0A2DA] hover:text-white transition-colors duration-300 cursor-pointer"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useContext } from "react";
import webIcons from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";


const Sidebar = ({isOpen,toggleSidebar}) => {

  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const navMenu = [
    { name: "Dashboard", path: "/dashboard", ico: webIcons.dashboardIco },
  ];

    const handleLogout = () => {
    // You can add actual logout logic here (e.g., clearing auth token, redirect)
    console.log("User logged out");
    navigate('/login') // Redirect to login page after logout
  };

  return (
    // <div className="w-2xs border-r border-gray-200 flex flex-col justify-between h-screen">
     <div className={`fixed sm:static top-0 left-0  w-2xs ${theme === 'light'? 'bg-white' : 'bg-black'} z-50 shadow-md transition-transform duration-300 ${isOpen? 'translate-x-0' : '-translate-x-full'} border-r border-gray-200 flex flex-col justify-between h-screen`}>
      <div className="p-10 w-[280px]">
        <img src={webIcons.logo} alt="" />
        <div className="flex flex-col gap-5 mt-10">
          {navMenu.map((menu) => (
            <div className="flex gap-2 bg-[var(--main-component-color)] py-3 px-5 rounded-xl text-white font-bold -tracking-tighter cursor-pointer">
              <img src={menu.ico} alt="" /> {menu.name}
            </div>
          ))}
        </div>
      </div>
       {/* Bottom: User Profile + Logout */}
      <div className="p-6  border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={webIcons.subDoneIco}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm ">
            <p className={`font-bold ${theme === 'light'? "text-gray-700" : "text-white"}`}>Md Sifat Islam</p>
            <p className={` ${theme === 'light'? "text-gray-500" : "text-gray-400"}`}>sifat@gmail.com</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full text-sm font-semibold text-[#B0A2DA] py-2 rounded-lg border border-[#B0A2DA] hover:bg-[#B0A2DA] hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;