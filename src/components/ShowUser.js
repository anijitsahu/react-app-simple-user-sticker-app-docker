import React from 'react';


const ShowUser = (props) => {
	let { name, designation } = props

	// render from the ShowUser component
	return (
		<div className="user-info">
			<div className="user-name">{name}</div>
			<div className="user-designation">{designation}</div>

		</div>
	);
}

export default ShowUser;