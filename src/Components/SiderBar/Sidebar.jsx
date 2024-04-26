import React from 'react';
import './Sidebar.Style.css'

const Sidebar = () => {
  return (
	<div className='sidebar_parent'>
				<h1 className='welcome_title'>welcome</h1>
		<div className='sidebar_content'>
			<div className='sidebar_list'>
				<ul>
					<li>Dashboard</li>
					<li>Schedules</li>
					<li>Note</li>
					<li>Message</li>
					<li>Settimgs</li>
				</ul>
			</div>
		</div>
	</div>
  )
}

export default Sidebar
