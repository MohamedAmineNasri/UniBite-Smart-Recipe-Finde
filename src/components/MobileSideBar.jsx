import { Heart, Home, Moon, Sun } from "lucide-react"; 
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MobileSideBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme") || "dark"
    );
  }, []);

  return (
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0  z-10 p-2 sm:hidden">
      <Link to={'/'}>
        <Home size={'24'} className="cursor-pointer" />
      </Link>
      <Link to={'/favorites'}>
        <Heart size={'24'} className="cursor-pointer" />
      </Link>
      <button onClick={toggleTheme} className="flex items-center gap-2">
        {isDarkMode ? (
          <>
            <Sun size={24} /> <span className="hidden md:block">Light</span>
          </>
        ) : (
          <>
            <Moon size={24} /> <span className="hidden md:block">Dark</span>
          </>
        )}
      </button>
    </div>
  );
};

export default MobileSideBar;
