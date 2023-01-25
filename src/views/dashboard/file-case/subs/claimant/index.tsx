import React, { useState } from "react";
import style from "../../file-case.module.scss";
import Select from "../../../../../components/select";
import { BtnTertiary, Btn } from "../../../../../components/button";
import ClaimantForm from "./form";
import { generateUniqueId } from "../../../../../utitlities/utilities";

interface claimantDef {
	id: string;
	surname: string;
	firstname: string;
}

const Flow = () => (
	<div className={style.flow}>
		<div className={`${style.flow__item} ${style["flow__item--active"]} `}>
			<span className={style.flow__item__number}>1</span>
			<h6>Basic information</h6>
			<span className={style.flow__line}></span>
		</div>

		<div className={`${style.flow__item} ${style["flow__item--active"]} `}>
			<span className={style.flow__item__number}>2</span>
			<h6>Claimant</h6>
			<span className={style.flow__line}></span>
		</div>

		<div className={style.flow__item}>
			<span className={style.flow__item__number}>3</span>
			<h6>Defendant</h6>
			<span className={style.flow__line}></span>
		</div>

		<div className={style.flow__item}>
			<span className={style.flow__item__number}>4</span>
			<h6>Upload Documents</h6>
		</div>
	</div>
);

function Claimant() {
	const [claimants, setClaimants] = useState<claimantDef[]>([
		{
			id: "",
			surname: "",
			firstname: "",
		},
	]);

	const addClaimant = () => {
		const newClaimant = {
			id: generateUniqueId(),
			surname: "",
			firstname: "",
		};

		console.log("new claimant", newClaimant);

		setClaimants((prev) => [...prev, newClaimant]);
	};
	return (
		<>
			<Flow />

			<div className={style.wrapper}>
				<div style={{ margin: "1rem 0 3rem 0" }}>
					<h3 className="heading-sec">Claimant details</h3>
				</div>
				{claimants?.map((claimant) => (
					<ClaimantForm />
				))}

				<div className={""}>
					<Btn onClick={addClaimant} className={style.add__claimant}>
						+ Add another claimant
					</Btn>
					<div className={style.save__claimant}>
						Save details to Address Book for next filing
					</div>
				</div>
				<div
					className={style["form__content"]}
					style={{ justifyContent: "flex-end", marginTop: "6rem" }}>
					<BtnTertiary className={style.submit}>Continue</BtnTertiary>
				</div>
			</div>
		</>
	);
}

export default Claimant;
