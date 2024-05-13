import React from "react";
import CallForm from "../components/CallForm";
import PopularLizing from "../components/PopularLizing";
import LizingTitle from "../components/LizingTitle";
import MainInfoLizing from "../components/MainInfoLizing";

import carRefoundLizing from "../imgs/carRefoundLizing.png"

export function CarRefound(){

    return(
        <div>
            <LizingTitle
            LizingTitle="Возвратный лизинг автомобилей и техники"
            littleTitle="Простой способ привлечь денежные средства для бизнеса" 
            lizingTitleInfo1="Увеличение оборотных средств"
            lizingTitleInfo2="Снижение расходов по налогам"
            lizingTitleInfo3="Менеджмент ресурсов" 
            lizingTitlelittleInfo1="Получайте оборотные средства, не привлекая дополнительных источников финансирования"
            lizingTitlelittleInfo2="Возвратный лизинг позволяет минимизировать расходы по налогообложению"
            lizingTitlelittleInfo3="Вы сможете направить полученные оборотные средства на необходимые цели"
            imgs={carRefoundLizing}
            />
            <MainInfoLizing
            mainInfo1="Минимальный авансовый платеж"
            mainInfo2="Быстрое оформление"
            mainInfo3="Страхование"
            mainInfo4="Упрощенный пакет документов"
            mainInfo5=""
            info1="Собственное участие от 15% стоимости автотранспорта"
            info2="В течение 2 дней"
            info3="Страховая компания на выбор"
            info4="Для рассмотрения сделки необходимо заполнить Заявку по установленной форме Банка"
            info5=""
            />
            <PopularLizing/>
            <CallForm/>
        </div>
    )
}

export default CarRefound;