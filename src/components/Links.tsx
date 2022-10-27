import React from "react";
import LinkItem from "./LinkItem";
import classes from "./Links.module.css";
import GithubSVG from "../assets/Github.svg";
import SlackSVG from "../assets/slack.svg";

export default function Links() {
	return (
		<div className={classes.container}>
			<LinkItem>Twitter Link</LinkItem>
			<LinkItem>Zuri Team</LinkItem>
			<LinkItem>Zuri Books</LinkItem>
			<LinkItem>Python Books</LinkItem>
			<LinkItem>Background Check for Coders</LinkItem>
			<LinkItem>Design Books</LinkItem>
			<div className={classes.bottom}>
				<div>
					<img src={SlackSVG} alt="slack" />
				</div>
				<div>
					<img src={GithubSVG} alt="github" />
				</div>
			</div>
		</div>
	);
}
