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
    }
}

const bodyReducer = (state = initialState, action) => {

    return state;
}

export default bodyReducer;