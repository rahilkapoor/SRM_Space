import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Gpacalc from "./screens/Gpacalc";
import Papers from "./screens/Papers";
import Files from "./screens/Files";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Home />
				<Switch>
					<Route path="/files">
						<Files />
					</Route>
					<Route path="/papers">
						<Papers />
					</Route>
					<Route path="/gpa">
						<Gpacalc />
					</Route>
					<Route path="/"></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
