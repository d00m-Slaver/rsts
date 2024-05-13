import React from "react";
import CallForm from "../components/CallForm";
import LittleSelector from "../components/littleselector";
import BigSelector from "../components/bigselector";
import MainInfoLizing from "../components/MainInfoLizing";
export function Catalogue(){
    return(
        <div>
             <MainInfoLizing
            mainInfo1="Спецпрограммы"
            mainInfo2="Быстрое оформление"
            mainInfo3="Страхование"
            mainInfo4="Упрощенный пакет документов"
            mainInfo5="Минимальный авансовый платеж"
            info1="Лизинг автотранспорта от 0,0001%"
            info2="В течение 2 дней"
            info3="Страховая компания на выбор"
            info4="Для рассмотрения сделки необходимо заполнить Заявку по установленной форме Банка"
            info5="Собственное участие от 15% стоимости автотранспорта"
            />
            <LittleSelector/>
            <BigSelector/>
            <CallForm/>
        </div>
    )
}

export default Catalogue;