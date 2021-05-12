import React from "react";
import TodoList from "./TodoList";

const Todo = () => {
    const [count, setCount] = React.useState([
        {id: 1, completed : false, name: 'Покормить кота', status: 'кормить надо 3-раза в день'},
        {id: 2, completed : false, name: 'Купить молоко', status: 'молоко 3.5% жирности'},
        {id: 3, completed : false, name: 'Помыть окна', status: 'помыть на кухне, в спальне и зале'}
    ])
    const [text, setText] = React.useState('')
    const [status, setStatus] = React.useState('')

    const addForm = (event) => {
        event.preventDefault()
        if (text) {
            setCount([...count, {
                name: text,
                completed : false,
                status: status.length ? status : '--not status--',
                id: Date.now()
            }])
            setText('')
            setStatus('')
        }
    }
    const editNewName = (event) => {
        setText(event.target.value)

    }
    const editNewStatus = (event) => {
        setStatus(event.target.value)

    }
    const delet = (id) => {
        setCount(count.filter(item => item.id !== id))
    }
    const editStatus = (id, status) => {
        setCount(count.map(g => {
            if (g.id === id) {
                return {
                    ...g,
                    status: status
                }
            }
            return g
        }))
    }
    const toggleCheckbox = (id) => {
        setCount(count.map(item => {
            if (item.id === id){
                item.completed = !item.completed
            }
            return item
        }))
    }

    return (
        <div className={"wrapper"}>
            <h1>Мои задачи</h1>
            <div className="box">
                {count.length
                    ? count.map((con, index) => <TodoList toggleCheckbox={toggleCheckbox} editStatus={editStatus} setStatus={setStatus} delete={delet} key={index} count={con}/>)
                    : <span>no card !!</span>}
            </div>
            <form onSubmit={addForm}>
                <input placeholder={'название'} type="text" value={text} onChange={editNewName}/>
                <input placeholder={'коментарий'} type="text" value={status} onChange={editNewStatus}/>
                <button type={'submit'}>Добавить новоё задание</button>
            </form>
        </div>
    )

}
export default Todo