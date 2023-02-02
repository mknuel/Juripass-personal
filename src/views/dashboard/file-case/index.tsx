import React from "react";
import Page from "../../../components/page";
import style from "./file-case.module.scss";
import Head from "../ui/head";
import { Btn } from "../../../components/button";
import Select from "../../../components/select";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../../components/icons/icons";

function FileCase() {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};
	const { state } = useLocation();

	return (
		<Page title="Juripass | File case">
			<div>
				<div className={style.head}>
					<Btn className={style.head__btn} onClick={goBack}>
						<ArrowLeftIcon /> <strong>Back</strong>
					</Btn>
					<Head showFull={false} />

					<h3 className={"heading-ter"} style={{ marginTop: "4rem" }}>
						File a {state.type === "firm" ? "firm" : "Personnal"} case
					</h3>
				</div>
				<section className={style.body__control}>
					<Outlet />
				</section>
			</div>
		</Page>
	);
}

export default FileCase;
