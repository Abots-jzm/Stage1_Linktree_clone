import React from "react";
import classes from "./App.module.css";
import Profile from "./components/Profile";
import ProfileImg from "./assets/profile__img.jpg";
import Links from "./components/Links";

function App() {
	return (
		<div className={classes.app}>
			<Profile name="Annette Black" image={ProfileImg} />
			<Links />
		</div>
	);
}

export default App;
