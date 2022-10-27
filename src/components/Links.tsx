import React from "react";
import LinkItem from "./LinkItem";
import classes from "./Links.module.css";

export default function Links() {
	return (
		<div className={classes.container}>
			<LinkItem>Twitter Link</LinkItem>
			<LinkItem>Zuri Team</LinkItem>
			<LinkItem>Zuri Books</LinkItem>
			<LinkItem>Python Books</LinkItem>
			<LinkItem>Background Check for Coders</LinkItem>
			<LinkItem>Design Books</LinkItem>
		</div>
	);
}
