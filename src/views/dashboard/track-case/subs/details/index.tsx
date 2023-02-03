import React from "react";
import { Btn } from "../../../../../components/button";
import style from "../../../file-case/file-case.module.scss";
import { ArrowLeftIcon } from "../../../../../components/icons/icons";
import Head from "../../../ui/head";
import { NavLink, useNavigate } from "react-router-dom"

import './details.scss'

const Details = () => {
    const navigate = useNavigate();
    const goBack = () => {
		navigate(-1);
	};
  return (
    <div>
      <div className={style.head}>
        <Btn className={style.head__btn} onClick={goBack}>
          <ArrowLeftIcon /> <strong>Back</strong>
        </Btn>
        <Head showFull={false} />
          </div>
          <h1>Details</h1>
          <div className="list">
            <ul>Basic Information</ul>  
            <ul>Payment Histories </ul>  
            <ul>Endorsement Notes</ul>  
            <ul>Filed Documents</ul>  
          </div>
    </div>
  );
};

export default Details;
