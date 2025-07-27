// import { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);

//     if (newTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       document.documentElement.classList.remove("light");
//     }
//     if(newTheme === 'light'){
//       document.documentElement.classList.add("light");
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=>{
    return localStorage.getItem("theme") || "light";
  });
useEffect(()=>{
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme); // Save theme to localStorage
},[theme]);

const toggleTheme = ()=>{
  setTheme((prev)=> prev === "light" ? "dark" : "light");
  // document.documentElement.classList.toggle("dark");
  // document.documentElement.classList.toggle("light");
}

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
