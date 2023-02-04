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

function Uploads() {
	const navigate = useNavigate();

	const { state } = useLocation();
	const handleSubmit = () => {
		navigate(`${DASHBOARD}/${NEWCASES.DEFAULT + NEWCASES.DOCUMENTS}`, {
			state,
		});
	};
	return (
		<>
			<Flow />
			<div className={style.wrapper}>
				<div className={style["upload__container"]}>
					<div className={style["upload__content"]}>
						<div className={style["upload__group"]}>
							<h5 className={style["upload__heading"]}>Document File</h5>
							<Uploader />
						</div>

						<div className={style["upload__group"]}>
							<h5 className={style["upload__heading"]}>
								Exhibit / Attachment ( if available )
							</h5>
							<Uploader />
						</div>

						<div className={style.uploaded}>
							<div className={style["upload--success"] + " " + style.upload}>
								<div className={style.upload__icon}>
									<DocumentIcon />
								</div>
								<div className="">
									<h5>Hessington oil vs Tony Gianopolis.pdf</h5>
									<p>200 KB - 100% Uploaded</p>
								</div>
								<div>
									<TickIcon />
								</div>
							</div>

							<div className={style["upload--loading"] + " " + style.upload}>
								<div className={style.upload__icon}>
									<DocumentIcon />
								</div>
								<div className="">
									<h5>Hessington oil vs Tony Gianopolis.pdf</h5>
									<p>200 KB - 100% Uploaded</p>
								</div>
								<div className={style.processing}>
									<ProcessingIcon />
								</div>
							</div>

							<div className={style["upload--failed"] + " " + style.upload}>
								<div className={style.upload__icon}>
									<DocumentIcon />
								</div>
								<div className="">
									<h5>Hessington oil vs Tony Gianopolis.pdf</h5>
									<p>failed</p>

									<strong>Try again</strong>
								</div>
								<div>
									<DeleteIcon />
								</div>
							</div>
						</div>

						<div className={style["form__content--right"]}>
							<BtnTertiary onClick={handleSubmit} className={style.submit}>
								Continue
							</BtnTertiary>
						</div>
					</div>
					<div className={style["info__container"]}>
						<div className={style["info"]}>
							<div className={style["info__header"]}>
								<AlertIcon />
								&nbsp;
								<h6>Accompany Documents</h6>
							</div>
							<ol>
								<li>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</li>

								<li>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</li>

								<li>Lorem ipsum dolor sit amet</li>

								<li>Lorem ipsum dolor sit amet</li>

								<li>Lorem ipsum dolor sit amet</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Uploads;
