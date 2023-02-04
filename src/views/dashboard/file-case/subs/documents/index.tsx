import React from "react";
import style from "../../file-case.module.scss";
import Uploader from "../../../ui/uploader";
import { BtnTertiary } from "../../../../../components/button";
import {
	AlertIcon,
	DeleteIcon,
	DocumentIcon,
	ProcessingIcon,
	TickIcon,
} from "../../../../../components/icons/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { DASHBOARD, NEWCASES } from "../../../../../constants/routes";
import Select from "../../../../../components/select";

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

		<div className={`${style.flow__item} ${style["flow__item--active"]} `}>
			<span className={style.flow__item__number}>3</span>
			<h6>Defendant</h6>
			<span className={style.flow__line}></span>
		</div>

		<div className={`${style.flow__item} ${style["flow__item--active"]} `}>
			<span className={style.flow__item__number}>4</span>
			<h6>Upload Documents</h6>
		</div>
	</div>
);

function Documents() {
	const navigate = useNavigate();

	const { state } = useLocation();
	const handleSubmit = () => {
		/* 	navigate(`${DASHBOARD}/${NEWCASES.DEFAULT + NEWCASES.INVOICE}`, { state }); */
	};
	return (
		<>
			<Flow />
			<div className={style.wrapper}>
				<div style={{ margin: "1rem 0 3rem 0" }}>
					<h3 className="heading-sec">Documents</h3>
				</div>
				<form
					action=""
					onSubmit={(e) => e.preventDefault()}
					className={style.document__form}>
					<div className={style.form__content}>
						<div className={style.form__group}>
							<label htmlFor="" className={style["disabled"]}>
								Statement of claim
							</label>
							<input
								placeholder="1"
								type="text"
								className={style.form__input}
								name="Statement_of_claim"
								id=""
								disabled
							/>
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
					</div>

					{/* second row */}
					<div className={style.form__content}>
						<div className={style.form__group}>
							<Select
								options={["High Court", "Magistrate Court", "Customary Court"]}
								name="Witnesses statement on Oath"
								handleChange={(op: string) => {}}></Select>
						</div>

						<div className={style.form__group}>
							<Select
								options={["High Court", "Magistrate Court", "Customary Court"]}
								name="Evidence to rely upon"
								handleChange={(op: string) => {}}></Select>
						</div>
					</div>

					{/* third row */}
					<div className={style.form__content}>
						<div className={style.form__group}>
							<Select
								options={["High Court", "Magistrate Court", "Customary Court"]}
								name="number of relief of sort"
								handleChange={(op: string) => {}}></Select>
						</div>

						<div className={style.form__group}>
							<label htmlFor="" className={style["disabled"]}>
								&nbsp;
							</label>

							<div className={style.form__checkbox__container}>
								<input
									placeholder="1"
									type="checkbox"
									className={style.form__checkbox}
									name="Statement_of_claim"
									id="check"
								/>

								<span>
									<label htmlFor="check">Use a bailiff</label>
								</span>
							</div>
						</div>
					</div>

					<div
						className={style["form__content"]}
						style={{
							justifyContent: "flex-end",
							marginTop: "6rem",
						}}>
						<div style={{ width: "50%" }}>&nbsp;</div>
						<BtnTertiary onClick={handleSubmit} className={style.submit}>
							Proceed to Payment
						</BtnTertiary>
					</div>
				</form>
			</div>
		</>
	);
}

export default Documents;
