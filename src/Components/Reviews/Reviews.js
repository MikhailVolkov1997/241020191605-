import React from "react"
import style from "./Reviews.module.css"

export default class Reviews extends React.Component {
    render() {
        return (
            <div className={style.infoLine}>
                <h3 className={style.lastReviews}>Последние отзывы</h3>
                <a className={style.allReviews} href="#">Все отзывы</a>

                <span className={style.social}>
                    <a href="#" className={style.likes}>131</a>
                    <a href="#" className={style.comments} >141</a>
                </span>
            </div>
        )
    }
} 