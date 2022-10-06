import React, {useEffect, useState} from "react"
import axios from "axios";
import MenuList from "./components/MenuList";
import TasksList from "./components/TasksList/TasksList";
import './App.scss'
import store from "./store";
import db from './../src/db.json'

const App = () => {
    const [items,  setItems] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
            .then(({data}) => {
                setItems(data)
        })
    }, [])
    console.log(items)
  return (
      <div className='todo'>
          <div className='todo_sidebar'>
              <MenuList
                  state={store.state}
                  items={items}
                  setItems={setItems}
              />
          </div>
          <div className='todo_tasks'>
              <TasksList
                  lists={db.lists[0]}
                  items={items}
                  setItems={setItems}
              />
          </div>
      </div>)
}

export default App;
