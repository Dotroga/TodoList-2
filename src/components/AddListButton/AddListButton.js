import React, {useState}from "react";
import List from './../List/List'
import Badge from "../Badge/Badge";
import './AddListButton.scss'
import closeButton from './../../Img/closeButton.svg'

const AddListButton = ({state}) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, selectColor] = useState(state.colors[0].id)
    return(<div className='add_list'>
            <List
                items={state.addItems}
                onClick={()=>setVisiblePopup(!visiblePopup)}
            />
        {visiblePopup &&
            <div className='add_list_popup'>
                <img
                    onClick={() => setVisiblePopup(false)}
                    src={closeButton}
                    alt="close"
                    className='add_list_popup_close'/>
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