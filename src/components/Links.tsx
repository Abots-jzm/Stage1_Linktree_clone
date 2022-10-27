import React from "react";
import LinkItem from "./LinkItem";
import classes from "./Links.module.css";
import GithubSVG from "../assets/Github.svg";
import SlackSVG from "../assets/slack.svg";

export default function Links() {
	return (
		<main className={classes.container}>
			<LinkItem url="https://twitter.com/The_Jazzmann">Twitter Link</LinkItem>
			<LinkItem url="https://training.zuri.team" id="btn__zuri">
				Zuri Team
			</LinkItem>
			<LinkItem url=" http://books.zuri.team" id="books">
				Zuri Books
			</LinkItem>
			<LinkItem url="https://books.zuri.team/python-for-beginners?ref_id=abotsjzm" id="book__python">
				Python Books
			</LinkItem>
			<LinkItem url="https://backgroundcheck.zuri.team" id="pitch">
				Background Check for Coders
			</LinkItem>
			<LinkItem url="https://books.zuri.team/design-rules" id="book__design">
				Design Books
			</LinkItem>
			<div className={classes.bottom}>
				<div>
					<img src={SlackSVG} alt="slack" />
				</div>
				<div>
					<img src={GithubSVG} alt="github" />
				</div>
			</div>
		</main>
	);
}
