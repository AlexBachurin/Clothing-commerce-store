import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useUserContext } from "../../contexts/UserContext";
import "./Navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropDown from "../../components/CartDropDown/CartDropDown";
import { useCartContext } from "../../contexts/CartContext";
const Navigation = () => {
	const { currentUser } = useUserContext();
	const { isCartOpen } = useCartContext();

	const signOut = async () => {
		await signOutUser();
	};
	return (
		<>
			<div className="nav">
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</Link>
				<nav className="nav-links">
					<Link to="/shop" className="nav-link">
						shop
					</Link>
					{currentUser ? (
						<span onClick={signOut} className="nav-link">
							Sign Out
						</span>
					) : (
						<Link to="/auth" className="nav-link">
							Sign In
						</Link>
					)}
					<CartIcon />
				</nav>
				{isCartOpen ? <CartDropDown /> : null}
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
