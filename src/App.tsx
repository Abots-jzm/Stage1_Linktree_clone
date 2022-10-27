import React from "react";
import classes from "./App.module.css";
import Profile from "./components/Profile";
import ProfileImg from "./assets/profile__img.jpg";

function App() {
	return (
		<div className={classes.app}>
			<Profile name="Annette Black" image={ProfileImg} />
		</div>
	);
}

export default App;
