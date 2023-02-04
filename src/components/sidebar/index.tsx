import React, { ReactInstance, useCallback, useState } from "react";
import style from "./style.module.scss";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

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
	const { pathname } = useLocation();

	const handleCase = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		showCase(!caseModal);
	};

	const navigate = useNavigate();
	const hideModal = useCallback(() => {
		showCase(false);
	}, []);

	const goTo = useCallback(() => {
		showCase(false);
		navigate("/dashboard/new-case", {
			state: {
				type: "firm",
			},
		});
	}, []);

	return (
		<>
			<aside className={style.sidebar}>
				{caseModal && <FirmCase hide={hideModal} goTo={goTo} />}
				<div className={style.sidebar__logo}>
					<img src="/assets/logo.png" alt="juripass logo" />
				</div>
				<ul className={style.sidebar__list}>
					<li className={style.sidebar__item}>
						<Link
							to={ROUTE.DASHBOARD}
							className={`${pathname === "/dashboard" ? style.active : ""} ${
								style.sidebar__link
							}`}>
							<DashboardIcon />
							<span>dashboard</span>
						</Link>
					</li>

					<li className={style.sidebar__item}>
						<Link
							to={ROUTE.NEWCASES.DEFAULT}
							className={`${pathname.match(/new-case/gi) ? style.active : ""} ${
								style.sidebar__link
							}`}
							onClick={handleCase}>
							<NewCaseICon />
							<span>New case</span>
						</Link>
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
							to={ROUTE.FILLINGS.DEFAULT}
							className={`${pathname.match(/fillings/gi) ? style.active : ""} ${
								style.sidebar__link
							}`}>
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
