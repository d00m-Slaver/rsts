import React from "react";
import CallForm from "../components/CallForm";
import LizingTitle from "../components/LizingTitle";
import MainInfoLizing from "../components/MainInfoLizing";

import equiMan from "../imgs/equiMan1.png"

export function LeasebackEquipment (){
    return(
        <div>
            <LizingTitle
            LizingTitle="Возвратный лизинг оборудования"
            littleTitle="Простой способ привлечь денежные средства для бизнеса" 
            lizingTitleInfo1="Увеличение оборотных средств"
            lizingTitleInfo2="Снижение расходов по налогам"
            lizingTitleInfo3="Менеджмент ресурсов" 
            lizingTitlelittleInfo1="Получайте оборотные средства, не привлекая дополнительных источников финансирования"
            lizingTitlelittleInfo2="Возвратный лизинг позволяет минимизировать расходы по налогообложению"
            lizingTitlelittleInfo3="Вы сможете направить полученные оборотные средства на необходимые цели"
            imgs={equiMan}
            />
            <MainInfoLizing
            mainInfo1="Спецпрограммы"
            mainInfo2="Быстрое оформление"
            mainInfo3="Минимальный пакет документов"
            mainInfo4="Минимальная предоплата"
            mainInfo5=""
            info1=""
            info2="принимаем решение и оформляем в течение 7 дней"
            info3="для оформления сделки необходимо подготовить до 4х документов"
            info4="собственное участие от 20% оборудования"
            info5=""
            />
            <CallForm/>
        </div>
    )
}

export default LeasebackEquipment;
