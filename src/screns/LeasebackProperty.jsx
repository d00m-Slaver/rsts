import React from "react";
import CallForm from "../components/CallForm";
import LizingTitle from "../components/LizingTitle";
import MainInfoLizing from "../components/MainInfoLizing";

import propWo from "../imgs/propwo.png"

export function LeasebackProperty (){
    return(
        <div>
            <LizingTitle
            LizingTitle="Возвратный лизинг коммерческой недвижимости"
            littleTitle="Простой способ привлечь денежные средства для бизнеса" 
            lizingTitleInfo1="Увеличение оборотных средств"
            lizingTitleInfo2="Снижение расходов по налогам"
            lizingTitleInfo3="Менеджмент ресурсов" 
            lizingTitlelittleInfo1="Получайте оборотные средства, не привлекая дополнительных источников финансирования"
            lizingTitlelittleInfo2="Возвратный лизинг позволяет минимизировать расходы по налогообложению"
            lizingTitlelittleInfo3="Вы сможете направить полученные оборотные средства на необходимые цели"
            imgs={propWo}
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