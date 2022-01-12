function Header() {
	return (
		<div
			style={{ height: 80 }}
			className="bg-warning d-flex justify-content-between pe-5"
		>
			<div className=" text-white h2 p-3">Sticky Notes</div>
			<div className="me-5">
				<img
					className="d-block w-100 h-100"
					src="../images/logo.png"
					alt="logo"
				></img>
			</div>
		</div>
	);
}

export default Header;
