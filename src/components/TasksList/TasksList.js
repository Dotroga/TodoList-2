import React from "react";
import './TasksList.scss'
import Edit from './../../Img/edit.svg'

const TasksList = () => {
    return (
        <div className='tasks'>
            <h2 className='tasks_title'>
                Фронтенд
                <img src={Edit} alt="Редактировать"/>
            </h2>
            <div className='tasks_items'>
                <div className='checkbox'>
                    <input id='check' type='checkbox'/>
                    <label htmlFor="check">
                        <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 21c-.512 0-1.024-.195-1.414-.586l-6-6c-.78-.78-.78-2.047 0-2.828.78-.78 2.047-.78 2.828 0L8 16.172 20.586 3.586c.78-.78 2.047-.78 2.828 0 .78.78.78 2.047 0 2.828l-14 14c-.39.39-.902.586-1.414.586z" fill="#494c4e"/>
                        </svg>
                    </label>
                </div>
                <p>ReactJS Hooks (useState, useReducer, useEffect и т.д.)</p>
            </div>
        </div>)
}

export default TasksList