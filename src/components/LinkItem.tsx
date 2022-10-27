import React from "react";
import classes from "./LinkItem.module.css";

interface Props {
	children: React.ReactNode;
}

export default function LinkItem({ children }: Props) {
	return (
		<a className={classes.item} href="">
			{children}
		</a>
	);
}
