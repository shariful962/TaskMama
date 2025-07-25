
import React, { useContext, useRef, useState } from "react";
import webIcons from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useReducer } from "react";
import { CiEdit } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Sidebar = ({isOpen,toggleSidebar}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("Md Sifat Islam");
  const [email, setEmail] = useState("sifat@gmail.com");
  const [profileImage, setProfileImage] = useState(webIcons.profilePic) 
  const fileInputRef = useRef(null)

  const { theme } = useContext(ThemeContext);
  

  const navigate = useNavigate();
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
      <div className="p-6  border-gray-200 relative">
        <div className="flex items-center gap-4 mb-4 relative">
          <img
            src={profileImage}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm ">
            <p className={`font-bold ${theme === 'light'? "text-gray-700" : "text-white"}`}>{name}</p>
            <p className={` ${theme === 'light'? "text-gray-500" : "text-gray-400"}`}>{email}</p>
          </div>
          <div><CiEdit size={24} className={`absolute top-0 right-0 cursor-pointer ${theme === "dark"? "text-white" : ""}`} onClick={() => setIsModalOpen(true)}/></div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full text-sm font-semibold text-[#B0A2DA] py-2 rounded-lg border border-[#B0A2DA] hover:bg-[#B0A2DA] hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Logout
        </button>
         {isModalOpen && (
          <div className={`absolute bottom-[100%] left-1/2 -translate-x-1/2 w-[90%] ${ theme === "light"? "bg-white border border-gray-200 shadow-xl" : "bg-black border border-[#B0A2DA]"} rounded-xl p-4  z-50 transition-all duration-300`}>
            <div className="flex justify-center  relative mb-4">
              <img
                src={profileImage}
                alt="Editable Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <button
                className="absolute bottom-0 right-[calc(50%-40px)] bg-white border p-1 rounded-full"
                onClick={() => fileInputRef.current.click()}
              >
                <FaCamera className="text-gray-600" />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Name</label>
              <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full mb-2 p-2 border  rounded outline-0 ${theme === "dark"? "bg-white border-[#B0A2DA]" : ""}`}
              placeholder="Name"
            />
          </div>
            

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded font-semibold"
            >
              Save
            </button>
            <button>
              <RxCross2
                className={`absolute top-2 right-2 text-gray-600 cursor-pointer ${theme === "dark"? "text-white" : ""}`}
                onClick={() => setIsModalOpen(false)}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;