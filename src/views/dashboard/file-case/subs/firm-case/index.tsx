import { useState } from "react";
import style from "./firm-case.module.scss";

function FirmCase() {
	const [modal, showModal] = useState(1);

	const changemodal = () => {
		showModal(2);
	};

	return <></>;
}

export default FirmCase;
