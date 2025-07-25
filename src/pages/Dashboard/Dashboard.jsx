import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import ThemeToggleButton from "../../components/ThemeToggleButton";
import {
  subscriptionCardClass,
  subscriptionHeadingClass,
  subscriptionUserNumber,
} from "../../utils/className";
import webIcons from "../../assets/images";
import { ThemeContext } from "../../context/ThemeContext";
const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  const [searchInput, setSearchInput] = useState("");
  const usersDataList = [
    {
      name: "MD. Sifat Islam",
      email: "sifat@example.com",
      sub: true,
      img: webIcons.subDoneIco,
    },
    {
      name: "rifat ullah",
      email: "rifat@example.com",
      sub: true,
      img: webIcons.subDoneIco,
    },
    {
      name: "jisan ahmed",
      email: "jisan@example.com",
      sub: false,
      img: webIcons.subDoneIco,
    },
    {
      name: "farhan uddin",
      email: "farhan@example.com",
      sub: false,
      img: webIcons.subDoneIco,
    },
    {
      name: "asif",
      email: "asif@example.com",
      sub: false,
      img: webIcons.subDoneIco,
    },
    {
      name: "nafis",
      email: "nafis@example.com",
      sub: false,
      img: webIcons.subDoneIco,
    },
    {
      name: "MD. sultan",
      email: "sultan@example.com",
      sub: true,
      img: webIcons.subDoneIco,
    },
    {
      name: "jannat",
      email: "jannat@example.com",
      sub: true,
      img: webIcons.subDoneIco,
    },
    {
      name: "bristy",
      email: "bristy@example.com",
      sub: true,
      img: webIcons.subDoneIco,
    },
  ];

  const blackWhiteText = `${theme === "light" ? "text-black" : "text-white"}`
  // By default all users are visible (true)
  const [visibleUsers, setVisibleUsers] = useState(
    usersDataList.reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {})
  );

  const toggleUserDetails = (index) => {
    setVisibleUsers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredUsers = usersDataList.filter(
    (user) =>
      user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.email.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="relative w-full flex justify-between py-10">
      <div className="w-full flex flex-col gap-7 px-5 md:px-10">
        <div className="flex justify-between items-center mt-7 md:mt-0">
          <h1
            className={`font-semibold leading-5.5 text-[1.75rem] lg:text-[2rem]  ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Dashboard
          </h1>
          <ThemeToggleButton  />
        </div>

        {/* subscribers info */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[5rem] ">
          <div className={subscriptionCardClass} >
            <h3 className={`${subscriptionHeadingClass} ${theme === 'light'? "text-[var(--sub-text-color)]": "text-gray-300"} `}>Total Subscribers</h3>
            <div>
              {/* <img src="" alt="" /> */}
              <span
                className={
                  subscriptionUserNumber + " text-[var(--main-component-color)]"
                }
              >
                <img src={webIcons.subDoneIco} alt="" />
                313
              </span>
            </div>
          </div>
          <div className={subscriptionCardClass}>
            <h3 className={`${subscriptionHeadingClass} ${theme === 'light'? "text-[var(--sub-text-color)]": "text-gray-300"}`}>No Subscribers</h3>
            <div className={subscriptionUserNumber + " text-[#DB0000]"}>
              <img src={webIcons.noSubIco} alt="" />
              <span>512</span>
            </div>
          </div>
        </div>

        {/* manage user */}
        <div className="mt-10.5 flex flex-col gap-6">
          <h2 className={`text-lg md:text-2xl lg:text-[1.75rem] font-semibold ${blackWhiteText}`}>
            Manage User
          </h2>
          <div className="w-full flex gap-2 items-center text-lg border border-[var(--main-component-color)] px-3 py-2 rounded-md">
            <IoIosSearch
              size={30}
              className="text-[var(--main-component-color)]"
            />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              placeholder="Search users.."
              className={`placeholder-[var(--main-component-color)] ${blackWhiteText} border-none outline-none w-full`}
            />
          </div>

          <div className="h-[500px] flex flex-col gap-5 overflow-y-scroll">
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className="w-full flex justify-between border-2 border-gray-300 rounded-lg px-3 py-2"
              >
                <div className="flex gap-5 items-center">
                  <img
                    src={user.img}
                    alt={user.name + "'s profile image"}
                    className="rounded-full"
                  />
                  {visibleUsers[index] && (
                    <div>
                      <h4
                        className={`${
                          theme === "light" ? "text-black" : "text-white"
                        } text-lg`}
                      >
                        {user.name}
                      </h4>

                      <p
                        className={theme === 'light'? "text-[var(--sub-text-color)]": "text-gray-300"}>
                        {user.email}
                      </p>
                    </div>
                  )}
                </div>
                <div className="w-auto md:w-[20rem] flex flex-col gap-2 md:gap-11 md:flex-row items-center">
                  <button
                    onClick={() => toggleUserDetails(index)}
                    className={`cursor-pointer text-xl ${theme === 'light'? "text-black" : "text-white"} hover:text-[var(--main-component-color)]`}
                  >
                    {visibleUsers[index] ? (
                      <IoEyeOffOutline />
                    ) : (
                      <IoEyeOutline />
                    )}
                  </button>
                  <button
                    className={`
                      w-[9rem] md:w-[10rem] text-balance text-sm px-5 py-3 rounded-full text-white whitespace-nowrap cursor-pointer
                      ${
                        user.sub
                          ? "bg-[var(--main-component-color)]"
                          : "bg-[var(--sub-component-color)]"
                      }`}
                  >
                    {user.sub ? "Subscriber" : "Non-Subscriber"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
