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

    const onRemoveTask = (taskId, listId) => {
        if (window.confirm('Вы действительно хотите удалить задачу ?')) {
            const newList = lists.map(i => {
                if (i.id === listId) {
                    i.tasks = i.tasks.filter(t => taskId !== t.id)
                }
                return i
            })
            setLists(newList)
            axios.delete('http://localhost:3001/tasks/' + taskId)
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
            <Task list={list} withoutEmpty={withoutEmpty} onRemove={onRemoveTask}/>
            <AddTask onAddTask={onAddTask} list={list}/>
        </div>);
}

export default TasksList