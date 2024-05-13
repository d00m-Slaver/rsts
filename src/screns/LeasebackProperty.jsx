import React from "react";
import CallForm from "../components/CallForm";
import LizingTitle from "../components/LizingTitle";
import MainInfoLizing from "../components/MainInfoLizing";

import propMan from "../imgs/propman.png"

export function LeasebackProperty (){
    return(
        <div>
            <LizingTitle
            LizingTitle="Лизинг коммерческой недвижимости"
            littleTitle="Обновите свои основные средства без серьезной нагрузки на бюджет" 
            lizingTitleInfo1="Увеличивайте чистую прибыль"
            lizingTitleInfo2="Налоговая выгода"
            lizingTitleInfo3="Индивидуальный график платежей" 
            lizingTitlelittleInfo1="Лизинговый платеж и затраты по эксплуатации имущества относятся на себестоимость"
            lizingTitlelittleInfo2="НДС, включенный в лизинговые платежи, принимается клиентом к зачету в полном объеме"
            lizingTitlelittleInfo3="Возможность получения более гибкого графика платежей по сравнению с кредитными платежами"
            imgs={propMan}
            />
            <MainInfoLizing
            mainInfo1="Быстрое оформление"
            mainInfo2="Минимальный пакет документов"
            mainInfo3="Минимальная предоплата"
            mainInfo4=""
            mainInfo5=""
            info1="подготовим все документы за 5 дней"
            info2="для оформления сделки необходимо заполнить не более 4х документов"
            info3="собственное участие от 20% стоимости"
            info4=""
            info5=""
            />
            <CallForm/>
        </div>
    )
}

export default LeasebackProperty;