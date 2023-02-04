import React from "react";
import style from "../../file-case.module.scss";
import Select from "../../../../../components/select";
import { BtnTertiary } from "../../../../../components/button";
import { useLocation, useNavigate } from "react-router-dom";
import { DASHBOARD, NEWCASES } from "../../../../../constants/routes";
const Flow = () => (
	<div className={style.flow}>
		<div className={`${style.flow__item} ${style["flow__item--active"]} `}>
			<span className={style.flow__item__number}>1</span>
			<h6>Basic information</h6>
			<span className={style.flow__line}></span>
		</div>

		<div className={style.flow__item}>
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

function Basic() {
	const navigate = useNavigate();

	const { state } = useLocation();
	const handleSubmit = () => {
		navigate(`${DASHBOARD}/${NEWCASES.DEFAULT + NEWCASES.CLAIMANT}`, {
			state,
		});
	};
	return (
		<>
			<Flow />

			<div className={style.wrapper}>
				<form action="" onSubmit={(e) => e.preventDefault()}>
					<div className={style.form__content} style={{ marginTop: "0" }}>
						<div className={style.form__group}>
							<Select
								options={["High Court", "Magistrate Court", "Customary Court"]}
								name="court"
								handleChange={(op: string) => {}}></Select>
						</div>

						<div className={style.form__group}>
							<Select
								options={[
									"Civil cases",
									"Criminal Cases",
									"Probate",
									"Matrimonial",
									"Others",
								]}
								name="case category"
								handleChange={(op: string) => {}}></Select>
						</div>

						<div className={style.form__group}>
							<Select
								options={["High Court", "Magistrate Court", "Customary Court"]}
								name="court"
								handleChange={(op: string) => {}}></Select>
						</div>
					</div>
					<div
						className={style["form__content"]}
						style={{ justifyContent: "flex-end", marginTop: "6rem" }}>
						<BtnTertiary onClick={handleSubmit} className={style.submit}>
							Continue
						</BtnTertiary>
					</div>
				</form>
			</div>
		</>
	);
}
export default Basic;
