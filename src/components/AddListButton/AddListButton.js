import React, {useState}from "react";
import List from './../List/List'
import Badge from "../Badge/Badge";
import './AddListButton.scss'

const AddListButton = ({state}) => {
    const [visiblePopup, setVisiblePopup] = useState(true)
    const [selectedColor, selectColor] = useState(null)
    return(<div className='add_list'>
            <List
                items={state.addItems}
                onClick={()=>setVisiblePopup(!visiblePopup)}
            />
        {visiblePopup &&
            <div className='add_list_popup'>
                <input className='field' type="text" placeholder='Название списка'/>
                <div className="add_list_popup_colors">
                    {state.colors.map(color =>(
                            <Badge
                                key={color.id}
                                color={color.name}
                                onClick={()=>{selectColor(color.id)}}
                                className={selectedColor === color.id && 'active'}
                            />))}
                </div>
                <button className='button' >Добавить</button>
            </div>}
        </div>)
}

export default AddListButton