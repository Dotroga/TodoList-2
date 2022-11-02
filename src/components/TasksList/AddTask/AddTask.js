import React, {useState}  from "react";
import axios from "axios";
import plus from './../../../Img/plus.svg'
import './AddTask.scss'

const AddTask = ({list, onAddTask}) => {
    const [visibleFrom, setVisibleFrom] = useState(false)
    const [inputValue, setInputValue] = useState(null)
    const toggleFormVisible = () => {
        setVisibleFrom(!visibleFrom)
        setInputValue('')
    }
    const addTask = () => {
        const obj = {
            listId: list.id,
            text: inputValue,
            completed: false}
        axios
            .post('http://localhost:3001/tasks', obj)
            .then(({data}) =>{
                onAddTask(list.id, data)
                toggleFormVisible()})
    }
    const saveTask = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            addTask()
        }
    }

  return(
      <div className='addTask'>
          {!visibleFrom
              ? <div onClick={toggleFormVisible} className='addTask_button'>
                  <img src={plus} alt=""/>
                  <span>Новая задача</span>
                </div>
              : <div className='addTask_popup' >
                  <input
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                      onKeyPress={saveTask}
                      className='field'
                      type="text"
                      placeholder='Название задачи'/>

                  <button
                      className='button'
                      onClick={addTask}
                  >
                      Добавить задачу
                  </button>
                  <button
                      className='button_grey'
                      onClick={toggleFormVisible}
                  >Отмена</button>
                </div>
          }
      </div>
  )
}
export default AddTask