import React from "react";
import {LizingBlock} from '../components/LizingBlock'
import newCars from '../imgs/newCar.png';
import catalogue from "../imgs/catalog.png";
import usedCars from "../imgs/userCars.png"
import trucks from "../imgs/trucks.png";
import spesialCars from "../imgs/specialCars.png";
import carRefound from "../imgs/carRefound.png";
import mainMan from "../imgs/mainMTBMAN.png"
import equi from "../imgs/equi.png";
import equiRef from "../imgs/equiRef.png";
import prop from "../imgs/prop.png";
import propRef from "../imgs/propRef.png";

export function MainLizing(){
    return(
        <>
        <div className="lizingTitle-workspace">
            <div className="flex-column lizingTitle-workspace-main">
                <div className="base-flex-row">
                <div className="base-lizing-img"><img src={mainMan}/></div>
                    <div className="base-flex-column">
                        <div className="lizingTitle-title"> Лизинг от МТБанка</div>
                            <div className="lizingTitle-littleTitle">Ставки от 0,0001%  на приобретение любого имущества. Отличная альтернатива кредиту.</div>
                        <div className="flex-row">
                            <div className="lizingTitle-button-blue">Оформить заявку</div>
                            <div className="lizingTitle-button-white">Позвонить</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="block-workzone">
                    <div className="textonce">Лизинг автотранспорта и спецтехники</div>
            
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
                <div className="textonce">Лизинг оборудования</div>
                    <div className="lizing-workspace">
                        <div className="lizing-main">
                        <LizingBlock routePath="/Equipment" NameText="Лизинг оборудования" dopText="Выгодные условия по приобретению в лизинг оборудования." buttonText="Подробнее"imgs={equi}/>
                        <LizingBlock routePath="/LeasebackEquipment" NameText="Возвратный лизинг оборудования" dopText="Простой способ привлечь денежные средства для бизнеса" buttonText="Подробнее"imgs={equiRef}/>
                        </div>
                    </div>
                <div className="textonce">Лизинг коммерческой недвижимости</div>
                <div className="lizing-workspace">
                        <div className="lizing-main">
                        <LizingBlock routePath="/CommercialProperty" NameText="Лизинг коммерческой недвижимости" dopText="Обновите свои основные средства без серьезной нагрузки на бюджет" buttonText="Подробнее"imgs={prop}/>
                        <LizingBlock routePath="/LeasebackProperty" NameText="Возвратный лизинг коммерческой недвижимости" dopText="Простой способ привлечь денежные средства для бизнеса" buttonText="Подробнее"imgs={propRef}/>
                        </div>
                    </div>
                </div>
            
            </>
    )
}

export default MainLizing;