import React, {useState} from "react";
import classNames from "classnames";
import axios from "axios";
import Task from "./Task/Task";
import AddTask from "./AddTask/AddTask";
import Edit from './../../Img/edit.svg'
import './TasksList.scss'


const TasksList = ({list, setActiveList, lists, setLists, withoutEmpty}) => {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState(null)

const onEdit = (id, name) => {
    setEdit(id)
    setValue(name)
}
    const saveTitle = e => {
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

    const onEditListTitle = (id, name) => {
        const newList = lists.map(i => {
            if (i.id === id) {
                i.name = name
            }
            return i
        })
        setLists(newList)
    }

    const onAddTask = (listId ,taskObj) => {
        const newList = lists.map(i => {
            if (i.id === listId) {
                i.tasks = [...i.tasks, taskObj]
            }
            return i
        })
        setLists(newList)
    }


    return (
        <div className='tasks'>
            <div className={classNames('tasks_title', `tasks_title_${list.color.name}`)}>
                {edit === list.id
                    ? <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyPress={saveTitle}/>
                    : <h2>
                        {list.name}
                        <img onClick={() => onEdit(list.id, list.name)} src={Edit} alt="Редактировать"/>
                    </h2>}
            </div>
            <Task
                list={list}
                setList={setActiveList}
                lists={lists}
                setLists={setLists}
                withoutEmpty={withoutEmpty}
            />
            <AddTask onAddTask={onAddTask} list={list}/>
        </div>);
}

export default TasksList