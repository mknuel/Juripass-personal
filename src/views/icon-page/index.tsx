import React from "react";
import {
	AlertIcon,
	AngleDownIcon,
	ArrowDownIcon,
	ArrowLeftIcon,
	ArrowUpIcon,
	CasesIcon,
	CopyIcon,
	DashboardIcon,
	DeleteIcon,
	DocumentIcon,
	ExistingCaseIcon,
	FlagIcon,
	HammerIcon,
	LogoutIcon,
	MyFilingsIcon,
	MyFirmIcon,
	NewCaseICon,
	NotificationBellIcon,
	ProcessingIcon,
	ProfileIcon,
	SavedDraftsIcon,
	TickIcon,
	TrackCaseIcon,
	UploadIcon,
	ToggeOnIcon,
	ToggeOffIcon,

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
				<span>{"<ArrowLeftIcon />"}</span>

				<ArrowLeftIcon />
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

			<div className="icon__item">
				<span>{"<DeleteIcon />"}</span>

				<DeleteIcon />
			</div>

			<div className="icon__item">
				<span>{"<DocumentIcon />"}</span>

				<DocumentIcon />
			</div>

			<div className="icon__item">
				<span>{"<TickIcon />"}</span>

				<TickIcon />
			</div>

			<div className="icon__item">
				<span>{"<ProcessingIcon />"}</span>

				<ProcessingIcon />
			</div>

			<div className="icon__item">
				<span>{"<UploadIcon />"}</span>

				<UploadIcon />
			</div>

			<div className="icon__item">
				<span>{"<AlertIcon />"}</span>

				<AlertIcon />
			</div>
			<div className="icon__item">
				<span>{"<ToggleOn />"}</span>

				<ToggeOnIcon />
			</div>
			<div className="icon__item">
				<span>{"<ToggleOff />"}</span>

				<ToggeOffIcon />
			</div>
		</div>
	);
}

export default IconPage;
