import React, {useEffect, useState} from "react"
import axios from "axios";
import MenuList from "./components/MenuList/MenuList";
import TasksList from "./components/TasksList/TasksList";
import './App.scss'
import store from "./store";
import {Route, Routes} from "react-router-dom";

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
              {lists && activeList &&
                  <Routes>
                      <Route exact path='/' element={
                          lists &&
                          lists.map(list => ( <TasksList
                              key={list.id}
                              list={list}
                              lists={lists}
                              setActiveList={setActiveList}
                              setLists={setLists}
                              withoutEmpty
                          />))}
                      />
                      <Route path={`/${activeList.id}`} element={
                          <TasksList
                              list={activeList}
                              setActiveList={setActiveList}
                              lists={lists}
                              setLists={setLists}
                          />}
                      />
                  </Routes>
              }
          </div>
      </div>)
}

export default App;
