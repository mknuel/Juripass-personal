import { UploadIcon } from "../../../../components/icons/icons";
import style from "./uploader.module.scss";

const Uploader = () => {
	return (
		<div className={style["uploader"]}>
			<div className={style["uploader__content"]}>
				<div className={style["uploader__icon"]}>
					<UploadIcon />
				</div>

				<div className={style["uploader__text"]}>
					<strong>Click to upload </strong>
					or drag and drop
				</div>
				<div className={style["uploader__format"]}>
					PDF, DOCS, PNG, JPG or MP4
				</div>
			</div>
		</div>
	);
};

export default Uploader;
