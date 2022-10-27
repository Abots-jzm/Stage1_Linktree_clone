import React from "react";
import classes from "./App.module.css";
import Profile from "./components/Profile";
// import ProfileImg from "./assets/profile__img.jpg";
import ProfileImg from "./assets/1666880703784.jpg";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<div className={classes.app}>
				<Profile name="@The_Jazzmann" image={ProfileImg} />
				<Links />
			</div>
			<Footer />
		</div>
	);
}

export default App;
