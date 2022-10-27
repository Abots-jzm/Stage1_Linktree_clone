import React from "react";
import classes from "./LinkItem.module.css";

interface Props {
	children: React.ReactNode;
	url: string;
	id?: string;
}

export default function LinkItem({ children, url, id }: Props) {
	return (
		<a className={classes.item} id={id} href={url} target="_blank">
			{children}
		</a>
	);
}
