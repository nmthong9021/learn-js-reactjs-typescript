import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/about' activeStyle>
		    TUTOR
		</NavLink>
		<NavLink to='/events' activeStyle>
			SCHEDULE
		</NavLink>
		<NavLink to='/annual' activeStyle>
			HISTORY
		</NavLink>
		<NavLink to='/team' activeStyle>
			COURSES
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			BLOGS
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			BECOME A TUTOR
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
