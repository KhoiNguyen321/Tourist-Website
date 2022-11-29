import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className='navLayer'>
        <div className='nav'>
          <div className='nav__content'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
