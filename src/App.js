import React, {useEffect} from "react"
import axios from "axios";
import MenuList from "./components/MenuList";
import TasksList from "./components/TasksList/TasksList";
import './App.scss'
import store from "./store";
const App = () => {

    useEffect(() => {
        axios.get('http://localhost:3001/lists?_expand=color').then(({ data }) => {
            console.log(data)
        })
    }, [])

  return (
      <div className='todo'>
          <div className='todo_sidebar'>
              <MenuList  state={store.state}/>
          </div>
          <div className='todo_tasks'>
              <TasksList/>
          </div>
      </div>)
}

export default App;
