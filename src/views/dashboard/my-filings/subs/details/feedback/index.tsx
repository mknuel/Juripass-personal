import { Link } from "react-router-dom";
import { BtnSecondary, BtnTertiary } from "../../../../../../components/button";
import style from "../../../my-filings.module.scss";
import { DASHBOARD, FILLINGS } from "../../../../../../constants/routes";
interface Props {
	showFeed: () => void;
}

const FilingFeedback: React.FC<Props> = ({ showFeed }) => {
	return (
		<div className={style.feedback__wrapper}>
			<div className={style.feedback__container}>
				<div className={style.feedback__header}>
					<h3 className={"heading-sec " + style.feedback__heading}>
						Relieve of sought
					</h3>
				</div>

				<div className={style.feedback}>
					<div className={style.feedback__author}>
						<div className={style.feedback__author__image}>
							<img src="/assets/approved.png" alt="" />
						</div>

						<div className={style.feedback__author__details}>
							<h4>Olivia Rhye</h4>
							<p>olivia@untitledui.com</p>
							<p>+2348034656892</p>
						</div>
					</div>
					<p className={style.feedback__text}>
						Id placerat ac ornare et egestas est suspendisse sit. Ac sed in est
						consequat pharetra tellus. Eros scelerisque facilisi arcu massa.
						Phasellus egestas habitant tortor aliquam porttitor. Eu ultricies
						libero neque sagittis in. Lectus nisi quis aliquet non non gravida
						viverra nunc. Dictum iaculis felis natoque feugiat risus ut. Mauris
						neque suscipit id malesuada. Accumsan lectus semper blandit erat
						purus faucibus at. In vitae augue enim diam. Gravida sem.
					</p>
				</div>
				<div className={style.feedback__footer}>
					<div className={style.feedback__action}>
						<p>Relieve of sought</p>

						<p>2</p>

						<p>#1000</p>
					</div>

					<Link to={`${DASHBOARD}/${FILLINGS.DEFAULT}${FILLINGS.INVOICE}`}>
						<BtnTertiary>Continue</BtnTertiary>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FilingFeedback;
