import React from "react";
import Head from "../ui/head";
import Page from "../../../components/page";
import Details from "./subs/details";
import FilingInvoice from "./subs/invoice";
import FilingFeedback from "./subs/details/feedback";
import { Outlet } from "react-router-dom";

function MyFilings() {
	return (
		<Page title="Juripass | My Filings">
			<div>
				<Outlet />
			</div>
		</Page>
	);
}

export default MyFilings;
