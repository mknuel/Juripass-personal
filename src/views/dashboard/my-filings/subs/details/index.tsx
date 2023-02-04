import { type } from "os";
import style from "../../my-filings.module.scss";
import ApprovedDetails from "./approved";
import RejectedDetails from "./rejected";
import { useState } from "react";
import Head from "../../../ui/head";
import PaymentHistories from "../payment-histories";
import OtherDocuments from "./other-documents";
import usePortrait from "../../../../../hooks/usePortrait";
type Props = {
	tab: number;
	changeTab: (e: number) => void;
};

const Flow: React.FC<Props> = ({ tab, changeTab }) => {
	const handleTab = (e: any) => {
		changeTab(parseInt(e.target.id));
	};
	return (
		<div className={style.flow}>
			<ul className={style.flow__list}>
				<li
					className={`${style.flow__item} ${
						tab === 1 && style["flow__item-active"]
					}`}
					id="1"
					onClick={handleTab}>
					Parties/Suit No
				</li>

				<li
					className={`${style.flow__item} ${
						tab === 2 && style["flow__item-active"]
					}`}
					id="2"
					onClick={handleTab}>
					My file
				</li>

				<li
					className={`${style.flow__item} ${
						tab === 3 && style["flow__item-active"]
					}`}
					id="3"
					onClick={handleTab}>
					Payment Histories
				</li>

				<li
					className={`${style.flow__item} ${
						tab === 4 && style["flow__item-active"]
					}`}
					id="4"
					onClick={handleTab}>
					Other Filed Documents
				</li>
			</ul>
		</div>
	);
};

const Details = () => {
	const [tab, setTab] = useState(1);
	const portrait = usePortrait();
	const change = (no: number) => {
		setTab(no);
	};
	return (
		<div>
			{!portrait && <Head showFull={false} />}
			<h2 className="headeing-sec" style={{ margin: "3rem 0 0rem 0" }}>
				Details{" "}
			</h2>
			<Flow tab={tab} changeTab={change} />
			{tab === 4 ? <OtherDocuments /> : <RejectedDetails />}
		</div>
	);

	// return <ApprovedDetails />;
};
export default Details;
