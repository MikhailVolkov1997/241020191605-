import React from "react"
import style from "./InfoTable.module.css"

export default class InfoTable extends React.Component {
    render() {
        return (
            <div className={style.infoTable}>
                <div >
                    <span className={style.tableTitle}>Услуг</span>
                </div>
                <div >
                    <table className={style.tableServices}>
                        <tbody ><tr>
                            <td className={style.tableItem}>
                                <span className={style.tableText} >Ручное бронирование</span>
                                <div className={style.line1}></div>
                            </td>
                            <td className={style.tableNumber} >11</td>
                        </tr>
                            <tr>
                                <td className={style.tableItem}>
                                    <span className={style.tableText}>Пакетные туры</span>
                                    <div className={style.line2}></div>
                                </td>
                                <td className={style.tableNumber}>3</td>
                            </tr>
                            <tr>
                                <td className={style.tableItem}>
                                    <span className={style.tableText}>Отели</span>
                                    <div className={style.line3}></div>
                                </td>
                                <td className={style.tableNumber}>1</td>
                            </tr>
                        </tbody></table>
                </div>

                <div className={style.tableCount}>
                    <text className={style.tableCountTotal}>Всего</text>
                    <text className={style.tableCountValue}>15</text>
                </div>
            </div>

        )
    }
}