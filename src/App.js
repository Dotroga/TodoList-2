import React from "react"
import store from "./store";
import MenuList from "./components/MenuList";
import './App.scss'




const App = () => {
  return (
      <div className='todo'>
          <div className='todo_sidebar'>
              <MenuList state={store.state}/>
              <div className='todo_tasks'>
              </div>
          </div>
      </div>)
}

export default App;
