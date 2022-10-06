import React, {useState} from "react";
import List from "./List/List";
import AddListButton from "./AddListButton/AddListButton";
import axios from "axios";

const MenuList = ({items, state, setItems,}) => {
    const onRemove = (id) => {
        let newItems = [...items].filter(it => it.id !== id )
        return setItems(newItems)
    }
    const removeList = (i) => {
        if (window.confirm('Вы действительно хотите удалить этот список?')) {
            axios.delete('http://localhost:3001/lists/' + i.id).then(() => {
                onRemove(i.id)
            })
        }
    }
    return(
        <div>
            <List items={state.allItems} />
            <List
                items={items}
                setItems={setItems}
                removeList={removeList}
                isRemovable/>
            <AddListButton
                items={items}
                state={state}
                setItems={setItems}/>
        </div>)
}

export default MenuList