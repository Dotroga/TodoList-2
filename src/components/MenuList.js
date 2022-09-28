import React, {useState} from "react";
import List from "./List/List";
import AddListButton from "./AddListButton/AddListButton";

const MenuList = ({state}) => {
    const [items,  setItems] = useState(state.items)
    const onAddList = () => {

    }
    return(
        <div>
            <List items={state.allItems}/>
            <List items={items} setItems={setItems}/>
            <AddListButton items={items} state={state} setItems={setItems}/>
        </div>)
}

export default MenuList