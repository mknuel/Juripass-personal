import React, { ReactElement } from "react";
import style from "../../home.module.scss";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	HammerIcon,
} from "../../../../../components/icons/icons";
import { Folder, FolderOpen } from "iconsax-react";

interface Props {
	icon: React.ReactNode;
	title: string;
}

function Card(props: Props) {
	const { icon,title } = props;
	return (
		<div className={style.card}>
			<h4 className={style.card__title}>{title}</h4>
			<div className={style.card__content}>
				<h4 className={style.card__numbers}>100</h4>
				{icon}
			</div>

			<div className={style["card__content--alt"]}>
				<div className={`${style.card__status} ${style["card__status--red"]}`}>
					<ArrowDownIcon />
					&nbsp;
					<span className={"dark"}>25</span>
					&nbsp;
					<span>Ongoing</span>
				</div>

				<div
					className={`${style.card__status} ${style["card__status--green"]}`}>
					<ArrowUpIcon />
					&nbsp;
					<span className={"dark"}>75</span>
					&nbsp;
					<span>Closed</span>
				</div>
			</div>
		</div>
	);
}

function HomeBanner() {
	return (
		<div className={style.banner}>
			<h2 className="heading-sec">Welcome Jeff ! 👋</h2>

			<h3 className={"heading-ter"}>Dashboard</h3>

			<div className={style.card__container}>
				<Card icon={<HammerIcon />} title="Total Cases" />
				<Card icon={<Folder size="44" color="#0d294d" variant="Bold"/>} title="Files" />
				<Card icon={<FolderOpen size="44" color="#0d294d" variant="Bold"/>} title="Awaiting Approval" />
			</div>
		</div>
	);
}

export default HomeBanner;
