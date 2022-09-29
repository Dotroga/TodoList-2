import React from "react"
import store from "./store";
import MenuList from "./components/MenuList";
import TasksList from "./components/TasksList/TasksList";
import './App.scss'

const App = () => {
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
