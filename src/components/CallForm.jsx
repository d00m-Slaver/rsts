import React from "react";
export function CallForm(){
    return(
        <div className="form-workspace">
            <form className="forms">
                <div className="flex-row">
                    <div className="flex-column border-style">
                        <div className="text-forms-big">Оформление заявки</div>
                        <input className="text-field" value="Фамилия Имя*" type="text"/>
                        <input className="text-field" value="Номер телефона*" type="text"/>
                        <input className="text-field" value="УНП*" type="text"/>
                        <div className="flex-row">
                        <input className="checkbox-forms" type="checkbox"/>
                        <div className="text-forms-little">Ознакомлен с политикой ЗАО «Банк» <br/> в отношении обработки и защиты <br/>персональных данных <br/>Даю согласие на обработку моих<br/> персональных данных</div>
                        </div>
                        <div className="button-forms">Отправить заявку</div>
                    </div>
                    <div className="flex-column right-chapter">
                        <div className="TitleText">Персональный менеджер</div>
                        <div className="LowerText">Получить дополнительную информацию <br/>по лизингу вы можете по телефону:</div>
                        <div className="Phone">+375 (29) 000-00-00</div>
                        <div className="TitleText">Инфоцентр</div>
                        <div className="LowerText">Вы всегда можете посмотреть все телефоны<br/> и контакты банка в нашем инфоцентре</div>
                        <div className="Phone">Перейти в инфоцентр</div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default CallForm;