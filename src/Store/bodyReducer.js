import firstPicture from '../assets/images/Rectangle.png'
import secondPicture from '../assets/images/Rectangle.jpg'
import thirdPicture from '../assets/images/Rectangle.svg'
import first from '../assets/images/first.jpg'
import second from '../assets/images/second.jpg'
import third from '../assets/images/third.png'
import fourth from '../assets/images/fourth.jpg'
import fifth from '../assets/images/fifth.jpg'
import sixth from '../assets/images/sixth.jpg'
import seventh from '../assets/images/seventh.jpg'
import eighth from '../assets/images/eighth.jpg'

let initialState = {
    firstPart: {
        images: [
            firstPicture,
            secondPicture,
            thirdPicture
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
        smallBanner: {
            first: {
                text: 'Производство оборудования',
                img: first
            },
            second: {
                text: 'Металлическая мебель',
                img: second
            },
            third: {
                text: 'Металлоконструкции',
                img: third
            },
            fourth: 
            {
                text: 'Металлооброботка',
                img: fourth
            },
            fifth: 
            {
                text: 'Раскрой металла',
                img: fifth
            },
            sixth: {
                text: 'Конструкторское бюро',
                img: sixth
            },
            seventh: {
                text: 'Аренда техники',
                img: seventh
            },
            eighth: {
                text: 'Ремонт техники',
                img: eighth
            }
        },
        fastCalculationText : 'Быстрый расчет цены по чертежу'
    }
}

const bodyReducer = (state = initialState, action) => {
    return state;
}

export default bodyReducer;