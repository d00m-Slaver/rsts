import { Link } from "react-router-dom"

import mtlogo from "../imgs/mtb.png"

export function HeaderMenu(){
    return(
    
    <div className="menu">
       <div className="block-workzone-menu">
            <div className="inline-flex-menu">
            <div className="block-menu-img">
                    <img src={mtlogo}/>
                    </div>
                <div className="block-menu">
                    <a>Счета</a>
                    </div>

                    <div className="block-menu">
                    <a>Карты</a>
                    </div>
                    
                    <div className="block-menu">
                    <a>Финансирование</a>
                    </div>

                    <div className="block-menu">
                    <Link to="/">Лизинг</Link>
                    </div>

                    <div className="block-menu">
                    <a>Депозиты</a>
                    </div>

                    <div className="block-menu">
                    <a>Сервисы</a>
                    </div>

                    <div className="block-menu">
                    <a>Эквайринг</a>
                    </div>

                    <div className="block-menu">
                    <a>FAQ</a>
                    </div>
            </div>
        </div>
    </div>    
 
    );
}