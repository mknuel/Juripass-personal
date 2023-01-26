import React from "react";
import style from "../../home.module.scss";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	HammerIcon,
} from "../../../../../components/icons/icons";

function Card() {
	return (
		<div className={style.card}>
			<h4 className={style.card__title}>Total Cases</h4>
			<div className={style.card__content}>
				<h4 className={style.card__numbers}>100</h4>
				<HammerIcon />
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
			<h2 className="heading-sec">Welcome Jeff! </h2>

			<h3 className={"heading-ter"}>Dashboard</h3>

			<div className={style.card__container}>
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default HomeBanner;
