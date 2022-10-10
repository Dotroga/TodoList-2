import React, {useState}  from "react";
import plus from './../../../Img/plus.svg'
import './AddTask.scss'

const AddTask = () => {
    const [visibleFrom, setVisibleFrom] = useState(false)
    const toggleFormVisible = () => {
        setVisibleFrom(!visibleFrom)
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
                      className='field'
                      type="text"
                      placeholder='Название списка'/>
                  <button  className='button' > Добавить задачу
                      {/*{isLoading ? 'Добавление..' : 'Добавить'}*/}
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