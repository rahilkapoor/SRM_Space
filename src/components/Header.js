import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					alt="Logo"
					src="https://www.iconfinder.com/data/icons/flat-business-icons/128/server-128.png"
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text"></input>
				<SearchIcon className="header__searchIcon"></SearchIcon>
			</div>
			<div className="header__nav">
				<div className="header__options">
					<span className="header__option">Login</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
