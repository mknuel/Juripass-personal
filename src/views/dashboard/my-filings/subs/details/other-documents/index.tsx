import React from "react";
import style from "../../../my-filings.module.scss";
import SingleCase from "../../../../track-case/subs/single-case";
import { AngleDownIcon } from "../../../../../../components/icons/icons";
import Head from "../../../../ui/head";

function OtherDocuments() {
	return (
		<div className={style.filings__container}>
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

export default OtherDocuments;
