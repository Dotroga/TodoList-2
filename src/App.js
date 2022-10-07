import React, {useEffect, useState} from "react"
import axios from "axios";
import MenuList from "./components/MenuList";
import TasksList from "./components/TasksList/TasksList";
import './App.scss'
import store from "./store";

const App = () => {
    const [lists,  setLists] = useState(null)
    useEffect(() => {
        axios
            .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
            .then(({data}) => {
                setLists(data)
        })
    }, [])
  return (
      <div className='todo'>
          <div className='todo_sidebar'>
              {lists && <MenuList
                  state={store.state}
                  lists={lists}
                  setLists={setLists}
              />}
          </div>
          <div className='todo_tasks'>
              {lists && <TasksList
                  list={lists[0]}
              />}
          </div>
      </div>)
}

export default App;
