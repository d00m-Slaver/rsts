import React from "react";
import {LizingBlock} from '../components/LizingBlock'
import newCars from '../imgs/newCar.png';
import catalogue from "../imgs/catalog.png";
import usedCars from "../imgs/userCars.png"
import trucks from "../imgs/trucks.png";
import spesialCars from "../imgs/specialCars.png";
import carRefound from "../imgs/carRefound.png";

export function MainLizing(){
    return(
        <div>
        <div className="block-workzone">
                    <div className="textonce">Лизинг автотранспорта и спецтехники</div>
                </div>
                <div className="lizing-workspace">
                    <div className="lizing-main">
                        <LizingBlock routePath="/NewComCars" NameText="Новые легковые и коммерческие автомобили" dopText="Выгодные условия по приобретению нового автомобиля для Вашего бизнеса." buttonText="Подробнее" imgs={newCars}/>
                        <LizingBlock routePath="/Catalogue" NameText="Акционные программы лизинга автомобилей" dopText="Большой выбор акционных программ по лизингу по ставкам от 0,0001% годовых" buttonText="Подробнее" imgs={catalogue}/>
                        <LizingBlock routePath="/UsedCars" NameText="Автомобили c пробегом" dopText="Выгодные условия по приобретению подержанного автомобиля для Вашего бизнеса." buttonText="Подробнее" imgs={usedCars}/>
                        <LizingBlock routePath="/Trucks" NameText="Грузовые автомобили" dopText="Выгодные условия по приобретению грузового автомобиля для Вашего бизнеса." buttonText="Подробнее"imgs={trucks}/>
                        <LizingBlock routePath="/SpesialCars" NameText="Специальная техника в лизинг" dopText="Лизинг спецтехники от 0,0001%." buttonText="Подробнее"imgs={spesialCars}/>
                        <LizingBlock routePath="/CarRefound" NameText="Возвратный лизинг автотехники" dopText="Простой способ привлечь денежные средства для бизнеса" buttonText="Подробнее"imgs={carRefound}/>
                    </div>
                </div>
                </div>
    )
}

export default MainLizing;