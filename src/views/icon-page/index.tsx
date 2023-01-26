import React from "react";
import {
	AngleDownIcon,
	ArrowDownIcon,
	ArrowUpIcon,
	CasesIcon,
	CopyIcon,
	DashboardIcon,
	ExistingCaseIcon,
	FlagIcon,
	HammerIcon,
	LeftArrowIcon,
	LogoutIcon,
	MyFilingsIcon,
	MyFirmIcon,
	NewCaseICon,
	NotificationBellIcon,
	ProfileIcon,
	SavedDraftsIcon,
	TrackCaseIcon,
} from "../../components/icons/icons";

function IconPage() {
	return (
		<div
			style={{
				display: "block",
				width: "100%",
				padding: "2rem 5rem",
			}}>
			<div className="icon__item icon__item__header">
				<span>component name</span>
				<span>icon</span>
			</div>
			<div className="icon__item">
				<span>{"<AngleDownIcon />"}</span>
				<AngleDownIcon />
			</div>

			<div className="icon__item">
				<span>{"<ArrowDownIcon />"}</span>
				<ArrowDownIcon />
			</div>

			<div className="icon__item">
				<span>{"<ArrowUpIcon />"}</span>
				<ArrowUpIcon />
			</div>

			<div className="icon__item">
				<span>{"<CasesIcon />"}</span>
				<CasesIcon />
			</div>

			<div className="icon__item">
				<span>{"<CopyIcon />"}</span>
				<CopyIcon />
			</div>

			<div className="icon__item">
				<span>{"<DashboardIcon />"}</span>
				<DashboardIcon />
			</div>

			<div className="icon__item">
				<span>{"<ExistingCaseIcon />"}</span>
				<ExistingCaseIcon />
			</div>

			<div className="icon__item">
				<span>{"<FlagIcon />"}</span>
				<FlagIcon />
			</div>

			<div className="icon__item">
				<span>{"<HammerIcon />"}</span>
				<HammerIcon />
			</div>

			<div className="icon__item">
				<span>{"<LeftArrowIcon />"}</span>

				<LeftArrowIcon />
			</div>

			<div className="icon__item">
				<span>{"<LogoutIcon />"}</span>
				<LogoutIcon />
			</div>

			<div className="icon__item">
				<span>{"<MyFilingsIcon />"}</span>
				<MyFilingsIcon />
			</div>

			<div className="icon__item">
				<span>{"<MyFirmIcon />"}</span>
				<MyFirmIcon />
			</div>

			<div className="icon__item">
				<span>{"<NewCaseICon />"}</span>
				<NewCaseICon />
			</div>

			<div className="icon__item">
				<span>{"<NotificationBellIcon />"}</span>
				<NotificationBellIcon />
			</div>

			<div className="icon__item">
				<span>{"<ProfileIcon />"}</span>
				<ProfileIcon />
			</div>

			<div className="icon__item">
				<span>{"<SavedDraftsIcon />"}</span>
				<SavedDraftsIcon />
			</div>

			<div className="icon__item">
				<span>{"<TrackCaseIcon />"}</span>

				<TrackCaseIcon />
			</div>
		</div>
	);
}

export default IconPage;
