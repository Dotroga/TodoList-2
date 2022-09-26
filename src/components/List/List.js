import React from "react"
import classNames from "classnames";
import Badge from './../Badge/Badge'
import './List.scss'


const List = ({items, onClick}) => {
    return (
        <div onClick={onClick} className='list'>
            {items.map(i => (
                <li className={classNames(classNames(i.className, {'active': i.active}))} key={i.id}>
                    {i.img
                        ? <img src={i.img} alt=""/>
                        : <Badge color={i.color}/>}
                    <span>{i.name}</span>
                </li>))}
        </div>)
}
export default List

