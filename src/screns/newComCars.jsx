import React from "react";
import CallForm from "../components/CallForm";
import PopularLizing from "../components/PopularLizing";
import LizingTitle from "../components/LizingTitle";
import MainInfoLizing from "../components/MainInfoLizing";

import newComCarsLizing from "../imgs/newCarLizing.png"

export function NewComCars(){
    return(
        <div>
            <LizingTitle
            LizingTitle="Быстрый лизинг новых легковых и коммерческих автомобилей"
            littleTitle="" 
            lizingTitleInfo1="Гарант качества"
            lizingTitleInfo2="Рассмотрение заявки до 2 дней"
            lizingTitleInfo3="Новая техника" 
            lizingTitlelittleInfo1="Наш лизинг находится под защитой гарантии качества"
            lizingTitlelittleInfo2="Мы ценим ваше время и сообщим о решении в течение 2 дней"
            lizingTitlelittleInfo3="Любой вид новой техники"
            imgs={newComCarsLizing}
            />
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
            <PopularLizing/>
            <CallForm/>
        </div>
    )
}

export default NewComCars;
