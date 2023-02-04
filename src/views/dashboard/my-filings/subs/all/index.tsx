import React from "react";
import style from "../../my-filings.module.scss";
import SingleCase from "../../../track-case/subs/single-case";
import Select from "../../../../../components/select";
import { AngleDownIcon } from "../../../../../components/icons/icons";
import Head from "../../../ui/head";

function All() {
	return (
		<div className={style.filings__container}>
			<Head />

			<h2 className="headeing-sec" style={{ margin: "3rem 0 0rem 0" }}>
				My Fillings
			</h2>
			<div className={style.filings__head}>
				<div className="my-filings__select">
					Sort by: <strong>Most recent</strong> <AngleDownIcon />
				</div>
			</div>

			<div className={style.filings__main}>
				<SingleCase id="#2578" />
				<SingleCase id="#2578" />
				<SingleCase id="#2578" />
				<SingleCase id="#2578" />
				<SingleCase id="#2578" />
			</div>
		</div>
	);
}

export default All;
