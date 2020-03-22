const SET_LANGUAGE='SET-LANGUAGE';

let initialState = {
    headerMenu: [
        {key:'ru', 
        data: [
            'Главная',
            'Услуги',
            'Наши работы',
            'О нас',
            'Контакты',
            'Меню',
            'Поиск'
        ]},
        {key:'ua', 
        data: [
            'Головна',
            'Послуги',
            'Наші роботи',
            'Про нас',
            'Контакти',
            'Меню',
            'Пошук'
        ]},
        {key:'eng', 
        data: [
            'Homepage',
            'Services',
            'Products',
            'About us',
            'Contacts',
            'Menu',
            'Search'
        ]}
    ],
    CurrentData: [
        'Главная',
        'Услуги',
        'Наши работы',
        'О нас',
        'Контакты',
        'Меню',
        'Поиск'
    ]
}

const headerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LANGUAGE: {
            return {
                ...state,
                CurrentData: headerMenu.map( elem => {
                    if(elem.key === action.key) {
                        return elem.data;
                    }
                }).filter(Boolean)
            }
        }
        default: {
            return state
        }
    }
}


export const setLanguage = (key) => ({ type: SET_LANGUAGE, key })
export default headerReducer