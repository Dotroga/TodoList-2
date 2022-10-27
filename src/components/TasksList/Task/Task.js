import React, {useState}from "react";
import './Task.scss'
import removeSVG from '../../../Img/remove.svg'
import Edit from './../../../Img/edit.svg'
import axios from "axios";

const Task = ({list, lists, setLists, withoutEmpty, }) => {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState(null)

    const onEdit = (id, name) => {
        setEdit(id)
        setValue(name)
    }

    const onRemove = (taskId, listId) => {
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
    const saveTask = () => {

    }

    return (
            <div className='lists'>
                {!withoutEmpty && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
                {list.tasks.map(t =>
                    <div key={t.id} className='lists_row' >
                        <div className='lists_row_checkbox'>
                            <input className='lists_row_checkbox_done' id={`task-${t.id}`} type='checkbox'/>
                            <label htmlFor={`task-${t.id}`}>
                                <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 21c-.512 0-1.024-.195-1.414-.586l-6-6c-.78-.78-.78-2.047 0-2.828.78-.78 2.047-.78 2.828 0L8 16.172 20.586 3.586c.78-.78 2.047-.78 2.828 0 .78.78.78 2.047 0 2.828l-14 14c-.39.39-.902.586-1.414.586z"
                                        fill="#494c4e"/>
                                </svg>
                            </label>
                        </div>
                            {edit === t.id
                            ?   <div className='lists_row_edit'>
                                    <input
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        onKeyPress={saveTask}/>
                                </div>
                            :   <div className='lists_row_normal'>
                                    <p>{t.text}</p>
                                    <img src={Edit}
                                         alt=""
                                         className='lists_row_normal_edit'
                                         onClick={() => onEdit(t.id, t.text)}/>
                                    <img src={removeSVG}
                                         alt='remove'
                                         onClick={() => onRemove(t.id, list.id)}
                                         className='lists_row_normal_remove'/>
                                </div>}
                    </div>)}
            </div>)
}

export default Task