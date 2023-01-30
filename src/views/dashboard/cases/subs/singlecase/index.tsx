import style from "../../cases.module.scss";
const SingleCase = () => {
	return (
		<tr className={style.case}>
			{/* <div className=""> */}
			<td className={style.case__suit}>#2453</td>
			<td className={style.case__title}>Hessington Oil Vs Tony Gianopolis</td>
			<td className={style.case__counsel}>
				{" "}
				<img
					src="/assets/juripassuser.png"
					alt="user"
					className={style.case__counsel__image}
				/>
			</td>
			<td className={style.case__court}>
				Court: <strong>High Court 1</strong>
			</td>
			{/* </div> */}
		</tr>
	);
};

export default SingleCase;
