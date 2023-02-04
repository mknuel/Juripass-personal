import { useNavigate } from "react-router-dom";
import { BtnSecondary, BtnTertiary } from "../../../../../components/button";
import style from "../../my-filings.module.scss";
const FilingInvoice = () => {
	const navigate = useNavigate();

	const cancel = () => navigate(-1);
	return (
		<div className={style.invoice}>
			<div className={style.invoice__wrapper}>
				<div className={style.invoice__banner}>
					<div className={style.invoice__banner__head}>
						<div>
							<h4 className="heading-sec">Case</h4>
							<p>#2453</p>
						</div>

						<div className={style.invoice__banner__group}>
							<BtnSecondary onClick={cancel}>Cancel</BtnSecondary>
							<BtnTertiary>Download</BtnTertiary>
						</div>
					</div>

					<div className={style.invoice__banner__main}>
						<div>
							<h4 className="heading-sec">Case</h4>
							<p>Hessington Oil Vs Tony Gianopolis</p>
						</div>
					</div>
				</div>
				<div className={" table__wrapper"}>
					<div className={style.invoice__main}>
						<table className={style.invoice__table}>
							<thead>
								<tr>
									<th>items</th>
									<th>unit</th>
									<th>rate</th>
									<th>amount</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>Relieve of sought</td>
									<td>1</td>
									<td>#500</td>
									<td>#500</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className={style.invoice__footer__wrapper}>
						<div className={style.invoice__footer}>
							<h3 className="heading-sec">Total</h3>
							<strong>#500</strong>
						</div>
					</div>
				</div>
				<div className={style.invoice__footer__action}>
					<BtnTertiary>Make Payment</BtnTertiary>
				</div>
			</div>
		</div>
	);
};

export default FilingInvoice;
