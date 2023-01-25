import React from "react";
import Page from "../../../components/page";
import style from "./file-case.module.scss";
import Head from "../ui/head";
import { Btn } from "../../../components/button";
import Select from "../../../components/select";
import { Outlet } from "react-router-dom";

function FileCase() {
	return (
		<Page title="Juripass | File case">
			<div>
				<div className={style.head}>
					<Btn className={style.head__btn}>
						<span>back</span>
					</Btn>
					<Head showFull={false} />

					<h3 className={"heading-ter"}>File a Personnal case</h3>
				</div>

				<Outlet />
			</div>
		</Page>
	);
}

export default FileCase;
