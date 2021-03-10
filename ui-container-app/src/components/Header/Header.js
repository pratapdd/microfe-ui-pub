import React, { useEffect, useState } from 'react';

// import Dropdown from './Dropdown';
import HeaderNavbar from './HeaderNavbar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 640 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <div className="h-14">
      <HeaderNavbar toggle={toggle} />
      {/* <Dropdown isOpen={isOpen} toggle={toggle} /> */}
    </div>
  );
}
