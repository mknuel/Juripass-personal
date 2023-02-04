import React from "react";
import style from "../../home.module.scss";
import Files from "../../../ui/files";
function FilesSection() {
	return (
		<div className={style.section}>
			<div className={style.section__head}>
				<h2 className={style.section__title}>Latest Files</h2>
				<span className={style.section__action}>View More</span>
			</div>

			<div className={style.section__body + " " + style.table}>
				<Files />
				<Files />
				<Files />
				<Files />
				<Files />
				<Files />
				<Files />
				<Files />
				<Files />
			</div>
		</div>
	);
}

export default FilesSection;
