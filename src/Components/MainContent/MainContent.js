import React from "react"
import style from "./MainContent.module.css"
import UserInfo from "../UserInfo/UserInfo"
import InfoTable from "../InfoTable/InfoTable"
import Reviews from "../Reviews/Reviews"
import UserComments from "../UsersComments/UsersComments"

export default class MainContent extends React.Component {
    render() {
        return (
            <body className={style.body}>
                <UserInfo />
                <InfoTable />
                <Reviews />
                <UserComments />
            </body>
        )
    }
}