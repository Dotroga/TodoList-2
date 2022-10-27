import React from "react"
import classNames from "classnames";
import Badge from '../../Badge/Badge'
import {NavLink} from "react-router-dom";
import removeSVG from '../../../Img/remove.svg'
import './List.scss'


const List = ({lists, isRemovable , onClick, removeList, setActiveList, activeList}) => {
    return (
        <div onClick={onClick} className='list'>
            {lists.map(i => (
                <NavLink to={`/${i.id}`} key={i.id}>
                    <li className={classNames(classNames(i.className, {
                        'active': activeList && activeList.id === i.id}))}
                         onClick={() =>  setActiveList &&  setActiveList(i)}>
                        {i.img
                            ? <img src={i.img} alt=""/>
                            : <Badge color={i.color.name}/>}
                        <span>{i.name}{i.tasks && i.tasks.length > 0 && ` (${i.tasks.length})`}</span>
                        {isRemovable && <img
                            className='list_remove'
                            src={removeSVG}
                            alt="remove"
                            onClick={() => removeList(i)}
                        /> }
                    </li>
                </NavLink>
                ))}
        </div>)
}
export default List

