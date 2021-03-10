import React from 'react';
import { Search } from './../Search';
import SettingsImage from './../../assets/images/settings.png';

const HeaderNavbar = ({ toggle }) => {
  console.log(toggle);
  return (
    <div
      className="relative flex items-center justify-end h-full text-black bg-white custom-shadow-header item-center font-librefranklin"
      role="header-navigation"
    >
      <Search />

      <button type="button" className="pr-10 outline-none focus:outline-none">
        <img
          src={SettingsImage}
          className="inline w-4 h-4 mr-2"
          alt="settings"
        />
        <span>Settings</span>
      </button>
    </div>
  );
};

export default HeaderNavbar;
