import React from "react"
import UserImage from "./../Img/user-image.png"
import style from "./UserInfo.module.css"

export default class UserInfo extends React.Component {
    render() {
        return (
            <div className={style.userInfoMain}>
                <img className={style.userImg} src={UserImage} />
                <h3 className={style.userName}>Вероника Ростова</h3>
                <text className={style.userStatus}>Менеджер по продажам</text>
                <text className={style.textInfo}>
                    Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны
					</text>
            </div>

        )
    }
}