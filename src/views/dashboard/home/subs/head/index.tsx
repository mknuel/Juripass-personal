import { NotificationBellIcon } from "../../../../../assets/icons";
import { BtnPrimary, BtnTertiary, Btn } from "../../../../../components/button";
import style from "../../home.module.scss";
function Head() {
	return (
		<nav className={style.head}>
			<div className={style.head__content}>
				<input
					type="search"
					name="search"
					id="search"
					className={style.head__search}
					placeholder="Suit no, parties, tracking ID"
				/>
			</div>
			<div className={style.head__content}>
				<BtnPrimary>file a new case</BtnPrimary>
				<BtnTertiary>File on an existing case</BtnTertiary>

				<Btn className={style.head__icon}>
					<NotificationBellIcon />
				</Btn>

				<Btn className={style.head__icon}>user deets</Btn>
			</div>
		</nav>
	);
}

export default Head;
