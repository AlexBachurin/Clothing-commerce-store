import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./Navigation.styles.scss";
const Navigation = () => {
	return (
		<>
			<div className="nav">
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links">
					<Link to="/shop" className="nav-link">
						shop
					</Link>
					<Link to="/signIn" className="nav-link">
						signIN
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
