import { Trash } from "iconsax-react";
import style from "../saved-drafts.module.scss";

const Draft = () => {
	return (
		<tr className={style.case}>
			<td className={style.case__no}>#2567</td>
			<td className={style.case__title}>
				<h4>Hessington Oil Vs Tony Gianopolis</h4>
			</td>
			<td className={style.case__type}>Civil Case</td>
			<td className={style.case__owner}>Business</td>
			<td className={style.case__status}>
				<span
					className={
						style.case__status__info +
						" " +
						style["case__status__info--pending"]
					}>
					Awaiting payment
				</span>
			</td>
			<td className={style.case__action}>
				<Trash size="32" color="#0D294D" variant="Bold" />
			</td>
		</tr>
	);
};

export default Draft;
