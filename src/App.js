import React from "react"
import state from "./state";
import List from "./components/List/List";
import './App.scss'



const App = () => {
  return (
      <div className='todo'>
          <div className='todo_sidebar'>
              <List items={state.allItems}/>
              <List items={state.items}/>
              <List items={state.addItems}/>
              <div className='todo_tasks'>
              </div>
          </div>
      </div>)
}

export default App;
