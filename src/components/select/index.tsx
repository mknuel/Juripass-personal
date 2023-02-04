import React, { memo, useState } from "react";
import style from "./select.module.scss";
import { AngleDownIcon } from "../icons/icons";

interface Props {
	name?: string;
	id?: string | null;
	options?: string[];
	defaultValue?: string;
	className?: string;
	handleChange: (option: string) => void;
	children?: React.ReactNode | React.ReactNode[];
}

const Select: React.FC<Props> = memo(
	({ id, children, name, options, defaultValue, className, handleChange }) => {
		const [isOpen, setIsOpen] = useState<boolean>(false);
		const [value, setValue] = useState<string | undefined>(defaultValue);
		const toggleSelect = () => setIsOpen(!isOpen);

		const setOption = (option: string) => {
			setValue(option);
			handleChange(option);
			setIsOpen(false);
		};
		return (
			<div className={`${style.select__container}`}>
				<div className={style.select}>
					{name && <div className={style.select__title}>{name}</div>}
					<div className={`${style.select__header} ${className}`} onClick={toggleSelect}>
						<div className="select__header__value">
							<span>{value ?? "Select " + name}</span>
						</div>
						<div
							className={`${style.select__header__icon} ${isOpen && style["select__header__icon--active"]}`}>
							<AngleDownIcon />
						</div>
					</div>
					<div className={style.select__list__container}>
						{isOpen && (
							<ul
								className={`${style.select__list} ${isOpen && style.active}`}
								id="select">
								{options?.map((option, index) => (
									<li
										className={style.select__list__item}
										key={index}
										onClick={() => {
											setOption(option);
										}}>
										{option}
									</li>
								))}
								{children}
							</ul>
						)}
					</div>
				</div>
			</div>
		);
	}
);

export default Select;