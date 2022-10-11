import React, {useState} from "react";
import classNames from "classnames";
import axios from "axios";
import Task from "./Task/Task";
import AddTask from "./AddTask/AddTask";
import Edit from './../../Img/edit.svg'
import './TasksList.scss'


const TasksList = ({list, setActiveList, onEditListTitle, onAddTask}) => {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState(null)

const editTitle = (id, name) => {
    setEdit(id)
    setValue(name)
}
    const save = e => {
        if (e.key === 'Enter') {
            e.preventDefault()
            onEditListTitle(edit, value)
            list.name = value
            setActiveList(list)
            setEdit(null)
            axios.patch('http://localhost:3001/lists/' + list.id,{
                name: value
            })
        }
    }
    return (
        <div className='tasks'>
            <div className={classNames('tasks_title', `tasks_title_${list.color.name}`)}>
                {edit === list.id
                    ? <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyPress={save}/>
                    : <h2>
                        {list.name}
                        <img onClick={() => editTitle(list.id, list.name)} src={Edit} alt="Редактировать"/>
                    </h2>}
            </div>
            <Task list={list}/>
            <AddTask onAddTask={onAddTask} list={list}/>
        </div>);
}

export default TasksList