import React, {useEffect, useState} from "react"
import axios from "axios";
import MenuList from "./components/MenuList";
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
    }, [])
    console.log(activeList)
  return (
      <div className='todo'>
          <div className='todo_sidebar'>
              {lists && <MenuList
                  onClickList={i => {setActiveList(i)}}
                  activeList={activeList}
                  state={store.state}
                  lists={lists}
                  setLists={setLists}
              />}
          </div>
          <div className='todo_tasks'>
              {lists && activeList && <TasksList
                  list={activeList}
              />}
          </div>
      </div>)
}

export default App;
