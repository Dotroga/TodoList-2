import Menu from "./Img/menu.png";
import Plus from './Img/plus.svg'

const store = {
    state: {
        allItems: [
            {id: 0, name: 'Все задачи', img: Menu, active: false, className: ''}
        ],
        items: [
            {id: 1, name: 'Фронтенд', color: 'blue', active: false},
            {id: 2, name: 'Проекты', color: 'purple', active: true},
            {id: 3, name: 'Английский', color: 'green', active: false},
            {id: 4, name: 'Покупки', color: 'red', active: false},
        ],
        addItems: [{
            id: 777,
            name: 'Добавить список',
            color: 'blue',
            img: Plus,
            active: false,
            className: 'list_add-button'
        }],
        colors: [
            {id: 1, hex: "#C9D1D3", name: "grey"},
            {id: 2, hex: "#42B883", name: "green"},
            {id: 3, hex: "#64C4ED", name: "blue"},
            {id: 4, hex: "#FFBBCC", name: "pink"},
            {id: 5, hex: "#B6E6BD", name: "lime"},
            {id: 6, hex: "#C355F5", name: "purple"},
            {id: 7, hex: "#110133", name: "black"},
            {id: 8, hex: "#FF6464", name: "red"}
        ]
    }
}
export default store
