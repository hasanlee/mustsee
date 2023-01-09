import React, { useEffect } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../../redux/stores/SettingSlice";
const Header = () => {
  const { darkMode } = useSelector((state) => state.setting);
  const htmlEl = document.querySelector("html");
  const dispatch = useDispatch();
  const switchTheme = () => {
    dispatch(toggleDarkMode(!darkMode));
  };
  useEffect(() => {
    switch (darkMode) {
      case true:
        htmlEl.classList.add("dark");
        break;
      default:
        htmlEl.classList.remove("dark");
        break;
    }
  }, [darkMode]);
  return (
    <header className='w-full h-14 shadow-md flex items-center justify-between px-8'>
      <h1 className='text-3xl text-black dark:text-white flex brand-logo'>
        <RiMovie2Line />
        <Link to='/'>MustSee</Link>
      </h1>
      <h1 onClick={switchTheme} className='text-3xl cursor-pointer select-none'>
        {darkMode ? "🌇" : "🌃"}
      </h1>
    </header>
  );
};

export default Header;
