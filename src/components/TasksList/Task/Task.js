import React from "react";
import './Task.scss'
import removeSVG from '../../../Img/remove.svg'
import edit from './../../../Img/edit.svg'

const Task = ({list, withoutEmpty, onRemove, onEdit}) => {
    return (
            <div className='lists'>
                {!withoutEmpty && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
                {list.tasks.map(t =>
                    <div key={t.id} className='tasks_lists_row' >
                        <div className='checkbox'>
                            <input id={`task-${t.id}`} type='checkbox'/>
                            <label htmlFor={`task-${t.id}`}>
                                <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 21c-.512 0-1.024-.195-1.414-.586l-6-6c-.78-.78-.78-2.047 0-2.828.78-.78 2.047-.78 2.828 0L8 16.172 20.586 3.586c.78-.78 2.047-.78 2.828 0 .78.78.78 2.047 0 2.828l-14 14c-.39.39-.902.586-1.414.586z"
                                        fill="#494c4e"/>
                                </svg>
                            </label>
                            <p>{t.text}</p>
                                <img src={removeSVG}
                                     alt='remove'
                                     onClick={() => onRemove(t.id, list.id)}
                                     className='checkbox_remove'/>
                                <img src={edit}
                                     alt=""
                                     className='checkbox_edit'/>
                        </div>
                    </div>)}
            </div>)
}

export default Task