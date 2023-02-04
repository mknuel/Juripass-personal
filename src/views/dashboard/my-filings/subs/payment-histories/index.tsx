import React from "react";
import Details from "./payment-details";

import "./payment-histories.scss";

const PaymentHistories = () => {
	return (
		<div>
			<div>
				<Details />
			</div>
			<div className="history">
				<h3>Invoices</h3>
			</div>
		</div>
	);
};

export default PaymentHistories;
