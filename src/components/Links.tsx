import React from "react";
import LinkItem from "./LinkItem";
import classes from "./Links.module.css";
import GithubSVG from "../assets/Github.svg";
import SlackSVG from "../assets/slack.svg";

export default function Links() {
	return (
		<main className={classes.container}>
			<LinkItem title="Twitter Link" url="https://twitter.com/The_Jazzmann" />
			<LinkItem title="Zuri Team" url="https://training.zuri.team" id="btn__zuri" />
			<LinkItem title="Zuri Books" url=" http://books.zuri.team" id="books">
				I visit this site anytime I need to find a great book about coding
			</LinkItem>
			<LinkItem title="Python Books" url="https://books.zuri.team/python-for-beginners?ref_id=abotsjzm" id="book__python">
				I found this book particularly useful, especially as a beginner. It sets you up and running on your journey to become the greatest programmer
				that the world has ever seen
			</LinkItem>
			<LinkItem title="Background Check for Coders" url="https://backgroundcheck.zuri.team" id="pitch">
				Are you an entrepreneur looking for trustworthy coders to hire? Run background checks on your employees to learn about their good, bad and
				downright scary activities
			</LinkItem>
			<LinkItem title="Design Books" url="https://books.zuri.team/design-rules" id="book__design">
				This Design Rules Book by HNG gives you all the tips & guidelines you need to create truly professional designs!
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
