import React from "react";
import CallForm from "../components/CallForm";
import LizingTitle from "../components/LizingTitle";
import MainInfoLizing from "../components/MainInfoLizing";

import equiMan from "../imgs/equiMan1.png"

export function Equipment(){
    return(
        <div>
            <LizingTitle
            LizingTitle="Лизинг оборудования"
            littleTitle="Выгодные условия по приобретению в лизинг оборудования" 
            lizingTitleInfo1="Оптимизация расходов"
            lizingTitleInfo2="Зачет НДС"
            lizingTitleInfo3="Гибкие условия" 
            lizingTitlelittleInfo1="Лизинговый платеж и затраты по эксплуатации имущества относятся на себестоимость"
            lizingTitlelittleInfo2="НДС, включенный в лизинговые платежи, принимается клиентом к зачету в полном объеме"
            lizingTitlelittleInfo3="Возможность получения более гибкого графика платежей по сравнению с кредитными платежами"
            imgs={equiMan}
            />
            <MainInfoLizing
            mainInfo1="Спецпрограммы"
            mainInfo2="Быстрое оформление"
            mainInfo3="Минимальный пакет документов"
            mainInfo4="Минимальная предоплата"
            mainInfo5=""
            info1=""
            info2="в течение 2х дней"
            info3=""
            info4=""
            info5=""
            />
            <CallForm/>
        </div>
    )
}

export default Equipment;
