import React from "react";
import Page from "../../../components/page";
import style from "./cases.module.scss";
import Head from "../ui/head";
import { Btn } from "../../../components/button";
import Select from "../../../components/select";
import { Outlet } from "react-router-dom";
import { ArrowLeftIcon } from "../../../components/icons/icons";
import SingleCase from "./subs/singlecase";

function Cases() {
	return (
		<Page title="Juripass | File case">
			<div className="">
				<div className={style.head}>
					<Btn className={style.head__btn}></Btn>
					<Head />

					<h3 className={"heading-ter"} style={{ marginBottom: "4rem" }}>
						Cases
					</h3>
				</div>
				<div className={style.filter__container}>
					<h6 className={style.filter__text}>Filter:</h6>

					<div className={style.filter__content}>
						<div className={style.filter}>
							<Select
								options={[
									"Civil cases",
									"Criminal Cases",
									"Probate",
									"Matrimonial",
									"Others",
								]}
								name=""
								handleChange={(op: string) => {}}
							/>
						</div>
						<div className={style.filter}>
							<Select
								options={[
									"Civil cases",
									"Criminal Cases",
									"Probate",
									"Matrimonial",
									"Others",
								]}
								name=""
								handleChange={(op: string) => {}}
							/>
						</div>
						<div className={style.filter}>
							<Select
								options={[
									"Civil cases",
									"Criminal Cases",
									"Probate",
									"Matrimonial",
									"Others",
								]}
								name=""
								handleChange={(op: string) => {}}
							/>
						</div>
						<div className={style.filter}>
							<Select
								options={[
									"Civil cases",
									"Criminal Cases",
									"Probate",
									"Matrimonial",
									"Others",
								]}
								name=""
								handleChange={(op: string) => {}}
							/>
						</div>
					</div>
				</div>
				<div className={style.table__container}>
					<table>
						<thead>
							<tr>
								<th className={style.case__suit}>Suit No</th>
								<th className={style.case__title}>Case Title</th>
								<th className={style.case__counsel}>Counsel</th>
								<th className={style.case__court}>Court</th>
							</tr>
						</thead>
						<tbody>
							<SingleCase />
							<SingleCase />
							<SingleCase />
							<SingleCase />
							<SingleCase />
							<SingleCase />
							<SingleCase />
							<SingleCase />
							<SingleCase />
						</tbody>
					</table>
				</div>
			</div>
		</Page>
	);
}

export default Cases;
