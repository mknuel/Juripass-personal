import { useState } from "react";
import style from "./modal.module.scss";
import { BtnPrimary, BtnSecondary, BtnTertiary } from "../../../button";
import { Link, RouteProps } from "react-router-dom";
import Select from "../../../select";
import * as ROUTES from "../../../../constants/routes";

interface Props {
	hide: () => void;
}

interface StateProps {
	type: string;
}

const FirmCaseModal: React.FC<Props> = ({ hide }) => {
	const [modal, showModal] = useState(1);

	const changeModal = () => {
		showModal(2);
	};

	return (
		<div className={style["modal__container"]}>
			{modal === 1 ? (
				<div className={style["modal"]}>
					<div className={style["modal__content"]}>
						<h4> File a new case</h4>
						<span>Select your preferred option to continue</span>
					</div>
					<div className={style["modal__content"]}>
						<BtnTertiary onClick={changeModal}>File for a firm</BtnTertiary>
						<BtnSecondary onClick={hide}>File a personal case</BtnSecondary>
					</div>
				</div>
			) : (
				<ChooseFirm hide={hide} />
			)}
		</div>
	);
};

export const ChooseFirm: React.FC<Props> = ({ hide }) => {
	return (
		<div className={style["modal"]}>
			<div className={style["modal__content"]}>
				<h4>Select your law firm</h4>
				<span>Select your preferred option to continue</span>
			</div>

			<div className={style["modal__content"]}>
				<div className={style.select}>
					<Select
						options={[
							"Civil cases",
							"Criminal Cases",
							"Probate",
							"Matrimonial",
							"Others",
						]}
						name="Law firm"
						handleChange={(op: string) => {}}
					/>
				</div>
			</div>
			<div className={style["modal__content"]}>
				<BtnTertiary onClick={hide}>Continue</BtnTertiary>
			</div>
		</div>
	);
};
export default FirmCaseModal;
