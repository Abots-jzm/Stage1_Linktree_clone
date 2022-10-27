import React from "react";
import classes from "./App.module.css";
import Profile from "./components/Profile";
import ProfileImg from "./assets/profile__img.jpg";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<div className={classes.app}>
				<Profile name="Annette Black" image={ProfileImg} />
				<Links />
			</div>
			<Footer />
		</div>
	);
}

export default App;
