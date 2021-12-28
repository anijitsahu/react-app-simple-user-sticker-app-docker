// render from the ShowUser component
export default ({ name, designation }) => {
	return (
		<div className="user-info">
			<div className="user-initials">
				<div className="initial-contents">{name.substr(0, 2)}</div>
			</div>
			<div className="user-name">
				{name}
				<div className="user-designation">{designation}</div>
			</div>
		</div>
	)
}
