import { FlagIcon } from "../../../../components/icons/icons";
import style from "./cases.module.scss";

function Cases() {
	return (
		<div className={style.case}>
			<div className={style.case__content}>
				<FlagIcon />
			</div>
			<div className={style.case__content}>
				<h3 className={style.case__title}>
					Ullamcorper arcu tortor fames eget urna a ac ornare
				</h3>
				<p className={style.case__paragraph}>
					Egestas morbi elit dignissim ullamcorper urna sed commodo augue. Felis
					massa cum varius enim egestas. Tortor proin quis volutpat cras amet{" "}
				</p>
			</div>
		</div>
	);
}

export default Cases;
