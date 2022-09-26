import React from "react";
import List from "./List/List";
import AddListButton from "./AddListButton/AddListButton";

const MenuList = ({state}) => {
    return(
        <div>
            <List items={state.allItems}/>
            <List items={state.items}/>
            <AddListButton state={state}/>
        </div>)
}

export default MenuList