import React from "react";
export function LizingTitle({LizingTitle,littleTitle,lizingTitleInfo1,lizingTitleInfo2,lizingTitleInfo3,lizingTitlelittleInfo1,lizingTitlelittleInfo2,lizingTitlelittleInfo3,imgs}){

    return(
        <div >
        <div className="lizingTitle-workspace">
            <div className="flex-column lizingTitle-workspace-main">
                <div className="base-flex-row">
                    <div className="base-flex-column">
                        <div className="lizingTitle-title">{LizingTitle}</div>
                            <div className="lizingTitle-littleTitle">{littleTitle}</div>
                        <div className="flex-row">
                            <div className="lizingTitle-button-blue">Каталог партнеров</div>
                            <div className="lizingTitle-button-white">Позвонить</div>
                        </div>
                    </div>
                    <div className="base-lizing-img"><img src={imgs}/></div>
                </div>
                <div className="flex-row">
                    <div className="flex-column lizingTitle-info">
                        {lizingTitleInfo1}
                        <div>{lizingTitlelittleInfo1}</div>
                    </div>
                    <div className="flex-column lizingTitle-info">
                        {lizingTitleInfo2}
                        <div>{lizingTitlelittleInfo2}</div>
                    </div>
                    <div className="flex-column lizingTitle-info">
                        {lizingTitleInfo3}
                        <div>{lizingTitlelittleInfo3}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LizingTitle;