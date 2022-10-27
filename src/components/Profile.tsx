import React from "react";
import ShareIcon from "./icons/ShareIcon";
import classes from "./Profile.module.css";
import CameraSVG from "../assets/camera-icon.svg";

interface Props {
	image: string;
	name: string;
}

export default function Profile({ image, name }: Props) {
	return (
		<section className={classes.container}>
			<div className={classes.pictureContainer}>
				<div className={classes.shareDesktop}>
					<ShareIcon />
					<span className={classes.toolTip}>Share Link</span>
				</div>
				<div className={classes.picture}>
					<div className={classes.pictureOverlay}>
						<div>
							<img src={CameraSVG} alt="cameraIcon" />
						</div>
					</div>
					<img src={image} alt="profile picture" />
				</div>
			</div>
			<div className={classes.name}>{name}</div>
		</section>
	);
}
