import style from "./files.module.scss";

function Files() {
	return (
		<div className={style.file}>
			<span className={style["file__number"]}>#2453</span>
			<h5 className={style["file__title"]}>
				Hessington Oil Vs Tony Gianopolis
			</h5>
			<h5 className={style["file__client"]}>
				client: <strong>John Doe</strong>
			</h5>
			<h5 className={style["file__court"]}>
				court: <strong>High Court</strong>
			</h5>
			<span
				className={`${style["file__status"]} ${style["file__status--approved"]}`}>
				Approved
			</span>
		</div>
	);
}

export default Files;
