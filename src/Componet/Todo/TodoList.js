import React from "react";

const TodoList = (props) => {
    const [editMod, setEditMod] = React.useState(false)
    const [status, setStatus] = React.useState(props.count.status)

    React.useEffect(() => {
        setStatus(prevState => props.count.status)
    }, [props.count.status])

    const onInput = () => {
        setEditMod(true)
    }
    const deonInput = () => {
        setEditMod(false)
        status.length ? props.editStatus(props.count.id, status) : props.editStatus(props.count.id, '--not status--')

    }

    const onStatusChage = (event) => {
        setStatus(event.target.value)
    }

    return (
        <div className="fan">
            <div>
                <input className={'checkBox'} type="checkbox" checked={props.count.completed} onChange={()=>props.toggleCheckbox(props.count.id)}/>
                <div>
                    <div  className={props.count.completed ? "done name" : 'name'}>{props.count.name}</div>
                    <div>
                        {!editMod
                            ? <div onDoubleClick={onInput} className="status">{props.count.status}</div>
                            : <input autoFocus={true} onBlur={deonInput} type="text" onChange={onStatusChage}
                                     value={status}/>}
                    </div>
                </div>
            </div>
            <button className={'asdd'} onClick={() => props.delete(props.count.id)}>delete</button>

        </div>
    )
}
export default TodoList