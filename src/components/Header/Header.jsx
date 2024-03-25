import React from "react";
import LightModeButton from "../LightModeButton/LightModeButton.jsx";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 py-2 transition shadow-md z-50 dark:shadow-white" role="banner" aria-label="Main header">
    <nav className="max-w-[1300px] px-1 py-1 flex justify-between items-center bg-transparent m-auto transition z-50 max-[700px]:w-full " role="navigation" aria-label="Main navigation">
        <h2 className="text-2xl font-bold text-black dark:text-white transition">Explore Countries!</h2>
        <LightModeButton/>
    </nav>
</header>
  );
};

export default Header;
