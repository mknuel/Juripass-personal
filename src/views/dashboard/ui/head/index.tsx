import { useRef, useState } from "react";
import {
	CopyIcon,
	MyFirmIcon,
	NotificationBellIcon,
	ProfileIcon,
} from "../../../../components/icons/icons";
import {
	BtnPrimary,
	BtnTertiary,
	Btn,
	BtnSecondary,
} from "../../../../components/button";
import style from "./head.module.scss";
interface Props {
	showFull?: boolean | null;
}

function HeadFull() {
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
				<BtnSecondary>file a new case</BtnSecondary>
				<BtnPrimary>File on an existing case</BtnPrimary>

				<Btn className={style.head__icon}>
					<NotificationBellIcon />
				</Btn>

				<div className={style.head__icon}>
					<Btn className={style.head__image} onClick={toggleMenu}>
						<img src="/assets/juripassuser.png" alt="user" />
					</Btn>
					{menu && (
						<div className={style.user}>
							<div className={style.user__details}>
								<img src="/assets/juripassuser.png" alt="" />

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

								<BtnSecondary>Logout</BtnSecondary>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

function HeadMini() {
	const [menu, showMenu] = useState<boolean>(false);

	const toggleMenu = () => {
		showMenu(!menu);
	};

	return (
		<nav className={style.head} style={{ gridTemplateColumns: "100%" }}>
			<div
				className={style.head__content}
				style={{ justifyContent: "flex-end" }}>
				<Btn className={style.head__icon}>
					<NotificationBellIcon />
				</Btn>

				<div className={style.head__icon}>
					<Btn className={style.head__image} onClick={toggleMenu}>
						<img src="/assets/juripassuser.png" alt="user" />
					</Btn>
					{menu && (
						<div className={style.user}>
							<div className={style.user__details}>
								<img src="/assets/juripassuser.png" alt="" />

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

								<BtnSecondary>Logout</BtnSecondary>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

const Head: React.FC<Props> = ({ showFull = true }) => {
	if (!showFull) {
		return <HeadMini />;
	}

	return <HeadFull />;
};

export default Head;
