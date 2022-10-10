import React, {useEffect, useState} from "react"
import axios from "axios";
import MenuList from "./components/MenuList/MenuList";
import TasksList from "./components/TasksList/TasksList";
import './App.scss'
import store from "./store";

const App = () => {
    const [lists,  setLists] = useState(null)
    const [activeList, setActiveList] = useState(null)
    useEffect(() => {
        axios
            .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
            .then(({data}) => {
                setLists(data)
        })
        console.log(lists)
    }, [])

    const onEditListTitle = (id, name) => {
        const newList = lists.map(i => {
            if (i.id === id) {
                i.name = name
            }
            return i
        })
        setLists(newList)
    }
  return (
      <div className='todo'>
          <div className='todo_sidebar'>
              {lists && <MenuList
                  setActiveList={setActiveList}
                  activeList={activeList}
                  state={store.state}
                  lists={lists}
                  setLists={setLists}
              />}
          </div>
          <div className='todo_tasks'>
              {lists && activeList && <TasksList
                  list={activeList}
                  setActiveList={setActiveList}
                  onEditListTitle={onEditListTitle}
              />}
          </div>
      </div>)
}

export default App;
