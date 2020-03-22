import firstPicture from '../assets/images/Rectangle.png';
import secondPicture from '../assets/images/Rectangle.jpg';
import thirdPicture from '../assets/images/Rectangle.svg';
import first from '../assets/images/first.jpg';
import second from '../assets/images/second.jpg';
import third from '../assets/images/third.png';
import fourth from '../assets/images/fourth.jpg';
import fifth from '../assets/images/fifth.jpg';
import sixth from '../assets/images/sixth.jpg';
import seventh from '../assets/images/seventh.jpg';
import eighth from '../assets/images/eighth.jpg';
import topPicture from '../assets/images/topPicture.jpg';
import bottomPicture from '../assets/images/bottomPicture.jpg';

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
        buttonText: [
            'Быстрый расчет цены по чертежу',
            'Расчет стоимости'
        ]
    },
    thirdPart: {
        topBanner: {
            text: {
                head: 'Почему мы?',
                main: 'Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного '
            },
            image: topPicture,
            position: 'left'
        },
        bottomBanner: {
            text: {
                head: 'Наши преимущества',
                main: 'Люди – профессионалы с большим опытом работы. Полный спектр работ по металлообработке в одном месте – комплексный индивидуальный подход. Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание промышленного '
            },
            image: bottomPicture,
            position: 'left'
        }
    }
}

const bodyReducer = (state = initialState, action) => {
    return state;
}

export default bodyReducer;