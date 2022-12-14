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
		<header className={classes.container}>
			<div className={classes.shareMobile}>&middot;&middot;&middot;</div>
			<div className={classes.pictureContainer}>
				<div className={classes.shareDesktop}>
					<ShareIcon />
					<span className={classes.toolTip}>Share Link</span>
				</div>
				<div className={classes.picture} id="profile__img">
					<div className={classes.pictureOverlay}>
						<div>
							<img src={CameraSVG} alt="cameraIcon" />
						</div>
					</div>
					<img src={image} alt="profile picture" />
				</div>
			</div>
			<div className={classes.name} id="twitter">
				{name}
			</div>
			<div className="hidden" id="slack">
				abotsjzm
			</div>
		</header>
	);
}
