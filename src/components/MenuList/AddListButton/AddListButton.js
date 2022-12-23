import React, {useEffect, useState} from "react";
import axios from "axios";
import List from '../List/List'
import Badge from "../../Badge/Badge";
import './AddListButton.scss'
import closeButton from '../../../Img/closeButton.svg'

const AddListButton = ({state, lists, setLists}) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, selectColor] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const addList = () => {
        if (!inputValue) {
            alert('Введите название списка')
        } else {
            setIsLoading(true)
            axios
                .post('http://localhost:3001/lists', {
                    name: inputValue,
                    colorId: selectedColor,
                    tasks: []
                })
                .then(({ data }) => {
                const color = state.colors.filter(c => c.id === selectedColor)[0]
                const listObj = { ...data, color, tasks: [] }
                onAddList(listObj)
            })
                .finally(() => {
                    setInputValue('')
                    selectColor(state.colors[0].id)
                    setVisiblePopup(false)
                    setIsLoading(false)
                })
        }
    }
    const onAddList = obj => {
        const newList = [...lists, obj];
        setLists(newList);
    };
    useEffect(()=>{
        if (Array.isArray(state.colors)) {
            selectColor(state.colors[0].id)
        }
    }, [state.colors])

    const closePopup = () => {
        setInputValue('')
        setVisiblePopup(false)
        selectColor(state.colors[0].id)
    }
    return(<div className='add_list'>
            <div onClick={()=>setVisiblePopup(!visiblePopup)}>
                Добавить
            </div>
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
                <button onClick={addList} className='button' >
                    {isLoading ? 'Добавление..' : 'Добавить'}
                </button>
            </div>}
        </div>)
}

export default AddListButton