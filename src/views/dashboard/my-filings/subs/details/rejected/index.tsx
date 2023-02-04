import { Link } from "react-router-dom";
import { BtnPrimary } from "../../../../../../components/button";
import { DocIcon } from "../../../../../../components/icons/icons";
import style from "../../../my-filings.module.scss";
import { DASHBOARD, FILLINGS } from "../../../../../../constants/routes";
import React, { useState } from "react";
import FilingFeedback from "../feedback";

interface Props {
	showFeed: () => void;
}

const RejectedDetails: React.FC<Props> = ({ showFeed }) => {
	return (
		<div className={style.details}>
			<div className={style.details__action}>
				<div className={style.details__action__content}>
					<div className={style.details__action__icon}>
						<DocIcon />
					</div>

					<p>Your filing could not be approved</p>
				</div>
				<div className={style.details__action__content}>
					<BtnPrimary onClick={showFeed}>View now</BtnPrimary>
				</div>
			</div>
			<div className={style.details__head}>
				<div className={style.details__head__number}>#2354</div>
				<div className={style.details__head__date}>
					<strong>Date Instituted :</strong>
					Jan 2nd, 2023
				</div>
			</div>
			<div className={style.details__row}>
				<div className={style.details__content}>
					<div className={style.details__text}>
						<strong>Case Category :</strong>
						Civil Case
					</div>

					<div className={style.details__text}>
						<strong>Sub-Category : </strong>
						General form of writ of summons
					</div>
					<div className={style.details__text}>
						<strong>Court : </strong>
						High Court
					</div>
				</div>

				<div className={style.details__content}>
					<div className={style.details__group}>
						<div className={style.details__text}>
							<strong>Case Approved By : </strong>
							<div className={style.info}>
								<img src="/assets/approved.png" alt="" />

								<div>
									<p className={style.info__main}>Olivia Rhye</p>
									<p>olivia@untitledui.com</p>
									<p>07036898574</p>
								</div>
							</div>
						</div>
						<div className={style.details__item}>
							<div className={style.details__text}>
								<strong>Firm: </strong>
								<div className={style.info}>
									<img src="/assets/firm.png" alt="" />

									<div>
										<p className={style.info__main}>Olivia Rhye</p>
										<p>olivia@untitledui.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={style.details__row}>
				<div className={style.details__content}>
					<div className={style.details__text}>
						<strong>Status: </strong>
						<div className={style.date + " " + style["date-danger"]}>
							Queried
						</div>
					</div>
				</div>

				<div className={style.details__content}>
					<div className={style.details__group}>
						<div className={style.details__item}>
							<div className={style.details__text}>
								<strong>Date Of Approval </strong>
							</div>
						</div>

						<div className={style.details__item}>
							<div className={style.details__text}>
								<div className={style.info}>
									<img src="/assets/firm.png" alt="" />

									<div>
										<p className={style.info__main}>Olivia Rhye</p>
										<p>olivia@untitledui.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.details__row + " " + style.details__footer}>
				<div className={style.details__content}>
					<div className={style.details__text}>
						<strong>Claimant : </strong>
						Individual
						<p>08056895687</p>
						<p>johndoesmith@gmail.com</p>
						<p>No 6, Bypass Junction, Akure, Ondo State Akure South</p>
					</div>
				</div>

				<div className={style.details__content}>
					<div className={style.details__text}>
						<strong>Defendant: </strong>
						Individual
						<p>08056895687</p>
						<p>johndoesmith@gmail.com</p>
						<p>No 6, Bypass Junction, Akure, Ondo State Akure South</p>
					</div>
				</div>
			</div>
		</div>
	);
};

function Wrapper() {
	const [feedback, showFeedback] = useState(false);

	const handleFeedBack = () => {
		showFeedback(true);
	};
	const removeFeedBack = () => {
		showFeedback(false);
	};

	return (
		<>
			{feedback ? (
				<FilingFeedback showFeed={removeFeedBack} />
			) : (
				<RejectedDetails showFeed={handleFeedBack} />
			)}
		</>
	);
}

export default Wrapper;
