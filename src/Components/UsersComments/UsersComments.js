import React from "react"
import style from "./UsersComments.module.css"

export default class UserComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { id: "dhjf54dsfjk", name: "Самуил", comment: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!", time: "3 Октября 2011" },
                { id: "fg45edsf", name: "Лилия Семёновна", comment: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?", time: " 5 Июня 2019" },
                { id: "fdgdf454d", name: "Лилия Семёновна", comment: "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?", time: "5 Августа 2019" }
            ]
        }

        this.valueForm = React.createRef();
    }

    addComment = (e) => {
        e.preventDefault();
        const textNewComment = this.valueForm.current.value;
        let newComment = { id: "sdsdss", name: "Аноним", comment: textNewComment, time: "8 Октября 2019" }
        let comments = [...this.state.comments, newComment]
        this.setState({
            comments
        })
        this.clearForm()
    }
    clearForm = () => {
        this.valueForm.current.value = "";
    }


    render() {
        return (
            <div>
                {this.state.comments.map(el => {
                    return <div className={style.userComment}>
                        <h4 className={style.userName}>{el.name}</h4>
                        <span className={style.commentTime}>{el.time}</span>
                        <div className={style.commentText}>{el.comment}</div>
                    </div>
                })}

                <div className={style.inputContainer}>
                    <div className={style.wrapper}>
                        <form onSubmit={this.addComment}>
                            <textarea ref={this.valueForm}
                                type="text"
                                className={style.textarea}
                                placeholder="Текст сообщения"></textarea>
                            <input className={style.inputSubmit} type="submit" value="Написать консультанту"></input>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}
