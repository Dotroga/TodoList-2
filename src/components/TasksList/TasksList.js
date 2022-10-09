import React from "react";
import Task from "./Task/Task";
import './TasksList.scss'
import Edit from './../../Img/edit.svg'
import classNames from "classnames";


const TasksList = ({list}) => {
    return (
        <div className='tasks'>
            <h2 className={classNames('tasks_title', `tasks_title_${list.color.name}`)}>
                {list.name}
                <img onClick={()=> alert(1)} src={Edit} alt="Редактировать"/>
            </h2>
            <Task list={list}/>
        </div>);
}

export default TasksList