import React from "react";
import classes from "./LinkItem.module.css";

interface Props {
	title: string;
	url: string;
	id?: string;
	children?: React.ReactNode;
}

export default function LinkItem({ children, url, id, title }: Props) {
	return (
		<a className={classes.item} id={id} href={url} target="_blank">
			{title}
			<p>{children}</p>
		</a>
	);
}
