import React from "react";
import line from "../imgs/lines/line.jpg";
import mainMan from "../imgs/mainMTBMAN.png"

export function phofoComponent(){

    return(
        <div className="photoBlock">
            <div className="photoBlock-container">
                <img className="photoBlock-backgroung-img" src={line}/>
                <img className="photoBlock-person-img" src={mainMan}/>
                <div className="photoBlock-flex flex-column">
                    <div className="photoBlock-big-text">
                        Лизинг от МТБанка
                    </div>
                    <div className="photoBlock-little-text">
                        Ставки от 0,0001% на приобретение любого имущества. Отличная альтернатива кредиту.
                    </div>
                    <div className="flex-row">
                        <div className="photoBlock-blue-button">Оформить заявку</div>
                        <div className="photoBlock-white-button">Позвонить</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default phofoComponent;