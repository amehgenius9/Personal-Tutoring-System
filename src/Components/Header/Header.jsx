import React from 'react';
import './Header.Style.css';
import { WiCloudyWindy } from 'react-icons/wi';
import Button from '../Buttons/Button';

const Header = () => {
  return (
	<div className='header_parent'>
		<WiCloudyWindy style={{ fontSize: 60}} />
		<div className='details'>
			<span></span>
			<p>Name</p>
			<Button title='Logout' className='header_btn' />
		</div>
	</div>
  )
}

export default Header
