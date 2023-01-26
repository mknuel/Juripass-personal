import { useState } from "react";
import {
	CopyIcon,
	MyFirmIcon,
	NotificationBellIcon,
	ProfileIcon,
} from "../../../../../assets/icons";
import { BtnPrimary, BtnTertiary, Btn } from "../../../../../components/button";
import style from "../../home.module.scss";
function Head() {
	const [menu, showMenu] = useState<boolean>(false);
	const toggleMenu = () => {
		showMenu(!menu);
	};
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

				<div className={style.head__icon}>
					<Btn className={style.head__image} onClick={toggleMenu}>
						<img src="./assets/juripassuser.png" alt="user" />
					</Btn>
					{menu && (
						<div className={style.user}>
							<div className={style.user__details}>
								<img src="./assets/juripassuser.png" alt="" />

								<h4> jeff Malone</h4>

								<h6>
									{" "}
									<span>jeffmalone@gmail.com</span> &nbsp;
									<CopyIcon />
								</h6>
							</div>
							<div className={style.user__actions}>
								<div>
									<Btn className={style["user__btn"]}>
										<MyFirmIcon /> <span>My Firm</span>
									</Btn>
									<Btn className={style["user__btn"]}>
										<ProfileIcon /> <span>My Profile</span>
									</Btn>
								</div>

								<BtnPrimary>Logout</BtnPrimary>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Head;
