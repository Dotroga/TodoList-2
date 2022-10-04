import React, {useState} from "react";
import List from "./List/List";
import AddListButton from "./AddListButton/AddListButton";

const MenuList = ({state}) => {
    const [items,  setItems] = useState(state.items.map(it => {
        it.color = state.colors.filter(color => color.id === it.colorId)[0].name
        return it
    }))
    const onRemove = (i) => {
        let newItems = [...items].filter(it => it !== i )
        return setItems(newItems)
    }
    const removeList = (i) => {
        if (window.confirm('Вы действительно хотите удалить этот список?')) {
            onRemove(i)
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