import React, {useState} from "react";
import List from "./List/List";
import AddListButton from "./AddListButton/AddListButton";
import axios from "axios";

const MenuList = ({lists, state, setLists, setActiveList, activeList}) => {
    const onRemove = (id) => {
        let newLists = [...lists].filter(it => it.id !== id )
        return setLists(newLists)
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
            <List lists={state.alllists}
                  activeList={activeList}
                  setActiveList={setActiveList}
            />
            <List
                lists={lists}
                setLists={setLists}
                setActiveList={setActiveList}
                activeList={activeList}
                removeList={removeList}
                isRemovable/>
            <AddListButton
                lists={lists}
                state={state}
                setLists={setLists}
                setActiveList={setActiveList}/>
        </div>)
}

export default MenuList