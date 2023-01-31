import Cases from "../../../ui/case";
import style from "../../home.module.scss";
function CasesSection() {
	return (
		<div className={style.section}>
			<div className={style.section__head}>
				<h2 className={style.section__title}>Cases</h2>
				<span className={style.section__action}>View More</span>
			</div>

			<div className={style.section__body}>
				<Cases />
				<Cases />
				<Cases />
				<Cases />
			</div>
		</div>
	);
}

export default CasesSection;
