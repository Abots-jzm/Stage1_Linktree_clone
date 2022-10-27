import React from "react";
import classes from "./Footer.module.css";
import ZuriLogo from "../assets/Zuri.Internship_Logo.svg";
import I4GLogo from "../assets/Ingressive-for-good-logo.svg";

export default function Footer() {
	return (
		<footer className={classes.container}>
			<div className={classes.zuri}>
				<img src={ZuriLogo} alt="zuri internship logo" />
			</div>
			<div className={classes.text}>HNG Internship 9 Frontend Task</div>
			<div className={classes.i4g}>
				<img src={I4GLogo} alt="ingressive for good logo" />
			</div>
		</footer>
	);
}
