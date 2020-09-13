import React from "react";
import "./Home.css";
import bg from "../media/bg.png";
import Tab from "./Tab.js";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img className="home__img" src={bg} alt="bg" />
				<div className="home__row">
					<Link to="/files">
						<Tab />
					</Link>
					<Link to="/papers">
						<Tab />
					</Link>
					<Link to="/gpa">
						<Tab />
					</Link>
				</div>
				<div className="home__row"></div>
			</div>
		</div>
	);
}
