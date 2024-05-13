import React from "react";
import CallForm from "../components/CallForm";
import PopularLizing from "../components/PopularLizing";
import LizingTitle from "../components/LizingTitle";
import MainInfoLizing from "../components/MainInfoLizing";

import usedCarsLizing from "../imgs/usedCarsLizing.png"

export function UsedСars(){
    return(
        <div>
            <LizingTitle
            LizingTitle="Лизинг легковых автомобилей с пробегом"
            littleTitle="Выгодные условия по приобретению подержанного автомобиля для вашего бизнеса" 
            lizingTitleInfo1="Гарант качества"
            lizingTitleInfo2="Рассмотрение заявки до 2 дней"
            lizingTitleInfo3="Б/у транспортные средства" 
            lizingTitlelittleInfo1="Наш лизинг находится под защитой гарантии качества"
            lizingTitlelittleInfo2="Мы ценим ваше время и сообщим о решении в течение 2 дней"
            lizingTitlelittleInfo3="Любой вид б/у легкового авто сроком использования до 10 лет"
            imgs={usedCarsLizing}
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