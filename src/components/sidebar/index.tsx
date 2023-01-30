import React, { ReactInstance, useState } from "react";
import style from "./style.module.scss";
import { NavLink, useNavigate } from "react-router-dom";

import * as ROUTE from "../../constants/routes";
import {
	CasesIcon,
	DashboardIcon,
	ExistingCaseIcon,
	MyFilingsIcon,
	MyFirmIcon,
	NewCaseICon,
	SavedDraftsIcon,
	LogoutIcon,
	TrackCaseIcon,
} from "../icons/icons";
import FirmCase from "./subs/modal";

function Sidebar() {
	const [caseModal, showCase] = useState<boolean>(false);

	const handleCase = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		showCase(!caseModal);
	};

	const navigate = useNavigate();
	const hideModal = () => {
		showCase(false);
		navigate("/dashboard/new-case");
	};
	return (
		<>
			<aside className={style.sidebar}>
				{caseModal && <FirmCase hide={hideModal} />}
				<div className={style.sidebar__logo}>
					<img src="/assets/logo.png" alt="juripass logo" />
				</div>
				<ul className={style.sidebar__list}>
					<li className={style.sidebar__item}>
						<NavLink
							to={ROUTE.DASHBOARD}
							className={(navData) =>
								`${navData.isActive ? style.active : ""} ${style.sidebar__link}`
							}>
							<DashboardIcon />
							<span>dashboard</span>
						</NavLink>
					</li>

					<li className={style.sidebar__item}>
						<NavLink
							to={ROUTE.NEWCASES.DEFAULT}
							className={(navData) =>
								`${navData.isActive ? style.active : ""} ${style.sidebar__link}`
							}
							onClick={handleCase}>
							<NewCaseICon />
							<span>New case</span>
						</NavLink>
					</li>

					<li className={style.sidebar__item}>
						<NavLink
							to={ROUTE.EXISTINGCASES}
							className={(navData) =>
								`${navData.isActive ? style.active : ""} ${style.sidebar__link}`
							}>
							<ExistingCaseIcon />
							<span>Existing case</span>
						</NavLink>
					</li>

					<li className={style.sidebar__item}>
						<NavLink
							to={ROUTE.TRACKCASES}
							className={(navData) =>
								`${navData.isActive ? style.active : ""} ${style.sidebar__link}`
							}>
							<TrackCaseIcon />
							<span>Track a case</span>
						</NavLink>
					</li>

					<li className={style.sidebar__item}>
						<NavLink
							to={ROUTE.CASES}
							className={(navData) =>
								`${navData.isActive ? style.active : ""} ${style.sidebar__link}`
							}>
							<CasesIcon />
							<span>cases</span>
						</NavLink>
					</li>

					<li className={style.sidebar__item}>
						<NavLink
							to={ROUTE.FILLINGS}
							className={(navData) =>
								`${navData.isActive ? style.active : ""} ${style.sidebar__link}`
							}>
							<MyFilingsIcon />
							<span>My filings</span>
						</NavLink>
					</li>

					<li className={style.sidebar__item}>
						<NavLink
							to={ROUTE.DRAFTS}
							className={(navData) =>
								`${navData.isActive ? style.active : ""} ${style.sidebar__link}`
							}>
							<SavedDraftsIcon />
							<span>saved drafts</span>
						</NavLink>
					</li>

					<li className={style.sidebar__item}>
						<NavLink
							to={ROUTE.FIRMS}
							className={(navData) =>
								`${navData.isActive ? style.active : ""} ${style.sidebar__link}`
							}>
							<MyFirmIcon />
							<span>My firms</span>
						</NavLink>
					</li>
				</ul>
				<div className={style.sidebar__item}>
					<button className={style.sidebar__link + " " + style.button}>
						<LogoutIcon />
						<span>Logout</span>
					</button>
				</div>
			</aside>
		</>
	);
}

export default Sidebar;
