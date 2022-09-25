import React from "react"
import classNames from "classnames";
import './List.scss'


const List = (items) => {
    console.log(items.items)
    return (
        <div className='list'>
            {items.items.map(i => (
                <li className={classNames(classNames(i.className, {'active': i.active}))} key={i.id}>
                    {i.img
                        ? <img src={i.img} alt=""/>
                        : <i className={`badge badge_${i.color}`}></i>}
                    <span>{i.name}</span>
                </li>))}
        </div>)
}
export default List

