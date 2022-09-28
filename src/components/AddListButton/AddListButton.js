import React, {useState}from "react";
import List from './../List/List'
import Badge from "../Badge/Badge";
import './AddListButton.scss'
import closeButton from './../../Img/closeButton.svg'

const AddListButton = ({state, items, setItems}) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, selectColor] = useState(state.colors[0].name)
    const [inputValue, setInputValue] = useState('')
    const addList = () => {
        if (!inputValue) {
            alert('Введите название списка')
        } else {
            return onAdd({id: items.length + 1, name: inputValue, color: selectedColor, active: false})
        }
    }
    const onAdd = (obj) => {
        const newItems = [...items, obj]
        setItems(newItems)
        setInputValue('')
        setVisiblePopup(false)
        selectColor(state.colors[0].name)
    }
    const closePopup = () => {
        setInputValue('')
        setVisiblePopup(false)
        selectColor(state.colors[0].name)
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
                                onClick={()=>{selectColor(color.name)}}
                                className={selectedColor === color.name && 'active'}
                            />))}
                </div>
                <button onClick={addList} className='button' >Добавить</button>
            </div>}
        </div>)
}

export default AddListButton