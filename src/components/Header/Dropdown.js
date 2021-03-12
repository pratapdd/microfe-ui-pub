import { Link } from 'react-router-dom';
import React from 'react';
import { SvgCart } from '@pratapdd/gc-microfe-ui-components';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <>
      <div
        className={
          isOpen
            ? 'justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
            : 'hidden'
        }
        onClick={toggle}
      >
        <div className="fixed top-2 right-2">
          <div className={'grid grid-rows-4 justify-left w-110 bg-white'}>
            <Link className="mt-4 ml-1 mr-1 nav-link" to="/payouts">
              PAYOUTS
            </Link>
            <Link className="mt-4 ml-1 mr-1 nav-link" to="/news">
              NEWS
            </Link>
            <Link className="mt-4 ml-1 mr-1 nav-link" to="/contact">
              CONTACT
            </Link>
            <Link className="inline-flex p-4" to="/customers">
              <SvgCart className="w-4 h-4 fill-currenttext-grey-500" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          isOpen ? 'fixed inset-0 z-40 bg-black bg-opacity-80' : 'hidden'
        }
      ></div>
    </>
  );
};

export default Dropdown;
