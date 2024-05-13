import React from "react";
export function CarItem({text,img,count}){
    return(

        <div className="carItem">
            <div className="flex-column">
                <div className="carItem-img">
                    <img/>
                </div>
                <div className="carItem-text">{text}</div>
                <div className="carItem-button">Предложений {count}</div>
            </div>
        </div>
    )
}

export default CarItem;