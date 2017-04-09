import React, {PropTypes} from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <div className='flex-wrapper'>
        <h1>
          <NavLink activeStyle={{
            fontWeight: 500,
            color: 'rgb(112, 189, 108)'
          }} to='/'>Brain Swarm</NavLink>
        </h1>

      </div>
    </nav>
  );
};

export default Nav;
