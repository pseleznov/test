import firstPicture from '../assets/images/Rectangle.png'

let initialState = {
    firstPart: {
        images: [
            firstPicture
        ],
        bigBannerText: {
            firstline: 'Высокоточное изготовление',
            secondline: 'изделий из метала по чертежам'
        }
    },
    secondPart: {
        headers: [
            'Услуги',
            'Наша компания'
        ],
        smallBannerText: {
            first: 'Производство оборудования',
            second: 'Металлическая мебель',
            third: 'Металлоконструкции',
            fourth: 'Металлооброботка',
            fifth: 'Раскрой металла',
            sixth: 'Конструкторское бюро',
            seventh: 'Аренда техники',
            eighth: 'Ремонт техники'
        },
        fastCalculationText : ''
    }

}

const bodyReducer = (state = initialState, action) => {

    return state;
}

export default bodyReducer;