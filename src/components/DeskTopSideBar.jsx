import { Heart, Home, Moon, Sun } from "lucide-react"; 
import { Link } from "react-router-dom";
import { useState } from "react";

const DeskTopSideBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Set the initial theme based on localStorage
  if (localStorage.getItem("theme")) {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0 items-center">
        <div className="w-full">
          <img src="/logo.png" alt="logo" className="hidden md:block" />
          <img className="block md:hidden" src="/Mobile-logo.png" alt="logo" />
        </div>
        <div className="flex flex-col items-center md:items-start gap-8">
          <Link to={'/'}>
            <Home size={'24'} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>
          <Link to={'/favorites'}>
            <Heart size={'24'} />
            <span className="font-bold hidden md:block">Favorite</span>
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
      </div>
    </div>
  );
};

export default DeskTopSideBar;
