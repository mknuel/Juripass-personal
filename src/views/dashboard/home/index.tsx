import React from 'react'
import Head from "./subs/head";
import Banner from "./subs/banner";
import CasesSection from "./subs/cases";
import style from "./home.module.scss";
import Page from "../../../components/page";
import FilesSection from "./subs/files";

function Home() {
	return (
		<Page title="Juripass | Dashboard">
			<div className="dashboard">
				<Head />
				<Banner />
				<div className={style.body}>
					<div className={style["section"]}>
						<CasesSection />
					</div>
					<div className={style["section"]}>
						<FilesSection />
					</div>
				</div>
			</div>
		</Page>
	);
}

export default Home
