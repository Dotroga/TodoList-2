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

    const onEditListTitle = (id, name) => {
        const newList = lists.map(i => {
            if (i.id === id) {
                i.name = name
            }
            return i
        })
        setLists(newList)
    }

    const onAddTask = (listId ,taskObj) => {
        const newList = lists.map(i => {
            if (i.id === listId) {
                i.tasks = [...i.tasks, taskObj]
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
              {lists && activeList &&
                  <Routes>
                      <Route exact path='/0' element={
                          lists &&
                          lists.map(list => ( <TasksList
                              key={list.id}
                              list={list}
                              setActiveList={setActiveList}
                              onAddTask={onAddTask}
                              onEditListTitle={onEditListTitle}
                              withoutEmpty
                          />))}
                      />
                      <Route path={`/${activeList.id}`} element={
                          <TasksList
                              list={activeList}
                              setActiveList={setActiveList}
                              onAddTask={onAddTask}
                              onEditListTitle={onEditListTitle}
                          />}
                      />
                  </Routes>
              }
          </div>
      </div>)
}

export default App;
