import Menu from "./Img/menu.png";
import Plus from './Img/plus.svg'

const state = {
    allItems: [
        {id: 0, name: 'Все задачи', img: Menu, active: false, className: ''}
    ],
    items: [
        {id: 1, name: 'Фронтенд', color: 'blue', active: false},
        {id: 2, name: 'Английский', color: 'purple', active: true},
        {id: 3, name: 'Покупки', color: 'green', active: false},
    ],
    addItems: [{
        id: 777,
        name: 'Добавить список',
        color: 'blue',
        img: Plus,
        active: false,
        className: 'list_add-button'
    }],
}
export default state
