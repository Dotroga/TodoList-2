import React, {useEffect, useState} from "react";
import axios from "axios";
import List from './../List/List'
import Badge from "../Badge/Badge";
import './AddListButton.scss'
import closeButton from './../../Img/closeButton.svg'

const AddListButton = ({state, items, setItems}) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, selectColor] = useState(state.colors[0].id)
    const [inputValue, setInputValue] = useState('')
    const addList = () => {
        if (!inputValue) {
            alert('Введите название списка')
        } else {
            return onAdd({id: items.length + 1, name: inputValue, color: selectedColor, active: false})
        }
    }
    // useEffect(()=>{
    //     // selectColor(state.colors[0].name)
    // }, [state.colors])
    // axios
    //     .post('http://localhost:3001/lists', {name: inputValue, colorId: selectedColor})
    //     .then(({data}) => {
    //         console.log(data)
    // })
    const onAdd = (obj) => {
        const newItems = [...items, obj]
        setItems(newItems)
        setInputValue('')
        setVisiblePopup(false)
        selectColor(state.colors[0].id)
    }
    const closePopup = () => {
        setInputValue('')
        setVisiblePopup(false)
        selectColor(state.colors[0].id)
    }
    return(<div className='add_list'>
            <List
                items={state.addItems}
                onClick={()=>setVisiblePopup(!visiblePopup)}
            />
        {visiblePopup &&
            <div className='add_list_popup'>
                <img
                    onClick={closePopup}
                    src={closeButton}
                    alt="close"
                    className='add_list_popup_close'/>
                <input
                    className='field'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    type="text"
                    placeholder='Название списка'/>
                <div className="add_list_popup_colors">
                    {state.colors.map(color =>(
                            <Badge
                                key={color.id}
                                color={color.name}
                                onClick={()=>{selectColor(color.id)}}
                                className={selectedColor === color.id && 'active'}
                            />))}
                </div>
                <button onClick={addList} className='button' >Добавить</button>
            </div>}
        </div>)
}

export default AddListButton