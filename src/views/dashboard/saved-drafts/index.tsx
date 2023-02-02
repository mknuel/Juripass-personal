import React from "react";
import Head from "../ui/head";
import style from "./saved-drafts.module.scss";
import Page from "../../../components/page";
import Draft from "./draft";

function SavedDrafts() {
	return (
		<Page title="Juripass | Saved Drafts">
			<div>
				<Head showFull={false} />

				<h2 className="heading-ter">Saved Drafts</h2>
				<div className={"table__wrapper"}>
					<table>
						<thead>
							<tr>
								<th className={style.case__number}>S/N</th>
								<th className={style.case__title}>Case Title</th>
								<th>Case Type</th>
								<th>Owner</th>
								<th>Status</th>
								<th className={style.case__action}></th>
							</tr>
						</thead>

						<tbody>
							<Draft />
							<Draft />
							<Draft />
							<Draft />
						</tbody>
					</table>
				</div>
			</div>
		</Page>
	);
}

export default SavedDrafts;
