import React from "react";

import LADA from '../LADA.png'
import GASEL from '../GASEL.png'
import BMW from '../BMW.jpg'
import GELLY from '../Gelly.jpg'

export function PopularLizing(){
    return(
        <div className="popular-workspace">
            <div className="flex-column"> 
                  <div className="popularTitle">Популярные варианты лизинга авто</div>
                  <div className="flex-row">
                        <div className="car-block">
                            <div className="car-img"> <img src={GASEL}/></div>
                            <div className="car-name">ГАЗель НЕКСТ</div>
                            <div className="car-info">Средний платёж в месяц -<span>3243 BYN</span>
                            <br/>На <span>3 года</span>
                            <br/>Аванс - <span>20%</span>
                            <br/>Стоимость авто - <span>129 000 BYN</span>
                            </div>
                            <div className="car-button">Подробнее</div>
                        </div>
                        <div className="car-block">
                            <div className="car-img"><img src={BMW}/></div>
                            <div className="car-name">BMW 520D</div>
                            <div className="car-info">Средний платёж в месяц - 
                            <span>5545 BYN</span>
                            <br/>На  
                            <span>48 месяцев</span>
                            <br/>Аванс -  
                            <span>30%</span>
                            <br/>Стоимость авто -  
                            <span>280 872 BYN</span>
                            </div>
                            <div className="car-button">Подробнее</div>
                        </div>
                        <div className="car-block">
                            <div className="car-img"><img src={GELLY}/></div>
                            <div className="car-name">Geely Tugella</div>
                            <div className="car-info">Средний платёж в месяц -  
                            <span>2890 BYN</span>
                            <br/>На  
                            <span>36 месяцев</span>
                            <br/>Аванс -  
                            <span>30%</span>
                            <br/>Стоимость авто -  
                            <span>126 800 BYN</span>
                            </div>
                            <div className="car-button">Подробнее</div>
                        </div>
                        <div className="car-block"> 
                            <div className="car-img"><img src={LADA}/></div>
                            <div className="car-name">Lada Vesta</div>
                            <div className="car-info">Средний платёж в месяц - 
                            <span>1154 BYN</span>
                            <br/>На 
                            <span>36 месяцев</span>
                            <br/>Аванс - 
                            <span>30%</span>
                            <br/>Стоимость авто - 
                            <span>47 000 BYN</span>
                            </div>
                            <div className="car-button">Подробнее</div>
                        </div>
                  </div>
            </div>
        </div>
    )
}

export default PopularLizing;