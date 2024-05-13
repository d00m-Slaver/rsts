import React from "react";
export function MainInfoLizing({mainInfo1,mainInfo2,mainInfo3,mainInfo4,mainInfo5,info1,info2,info3,info4,info5}){

    return(
        <div className="MainInfoLizing">
            <div className="MainInfoLizing-workspace">
                <div className="MainInfoLizing-title">
                    Выгодные условия лизинга
                </div>
                <div className="flex-row MainInfoLizing-info">
                    <div className="MainInfoLizing-info-block">{mainInfo1}<div>{info1}</div></div>
                    <div className="MainInfoLizing-info-block">{mainInfo2}<div>{info2}</div></div>
                    <div className="MainInfoLizing-info-block">{mainInfo3}<div>{info3}</div></div>
                    <div className="MainInfoLizing-info-block">{mainInfo4}<div>{info4}</div></div>
                    <div className="MainInfoLizing-info-block">{mainInfo5}<div>{info5}</div></div>
                </div>
                <div className="MainInfoLizing-button">
                    Оформить лизинг
                </div>
            </div>
        </div>
    )
}

export default MainInfoLizing;