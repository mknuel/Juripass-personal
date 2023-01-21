import React from 'react'
import Head from "./subs/head";
import Banner from "./subs/banner";
import CasesSection from "./subs/cases";
import style from "./home.module.scss";

function Home() {
	return (
		<div className="dashboard">
			<Head />
			<Banner />
			<div className={style.body}>
				<CasesSection />
			</div>
		</div>
	);
}

export default Home
