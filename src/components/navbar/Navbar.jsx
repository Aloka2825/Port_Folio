import React, { useState } from 'react';
import { logo } from '../../assets/images/index.js';
import { navLinks } from '../../constants/index.js';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full h-24 mx-auto flex sticky top-0 z-50 bg-bodyColor justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4 md:px-8'>
      <div className='h-full w-16'>
        <img src={logo} alt="logo" className='h-full w-full object-contain' />
      </div>
      <div className='hidden md:flex'>
        <ul className='flex items-center gap-10'>
          {
            navLinks.map(({ _id, title, link }) => (
              <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={_id}>
                <Link
                  activeClass='active'
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='md:hidden flex items-center'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-gray-400'>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className='absolute top-24 left-0 w-full bg-bodyColor flex flex-col items-center border-t-[1px] border-t-gray-600 md:hidden'>
          <ul className='flex flex-col items-center gap-6 py-6'>
            {
              navLinks.map(({ _id, title, link }) => (
                <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300' key={_id}>
                  <Link
                    activeClass='active'
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                  >
                    {title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
