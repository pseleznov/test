import firstPicture from '../assets/images/Rectangle.svg'

let initialState = {
    firstPart: {
        images: [
            firstPicture
        ],
        bigBannerText: {
            firstline: 'bla',
            secondline: 'blabla'
        }
    }
}

const bodyReducer = (state = initialState, action) => {

    return state;
}

export default bodyReducer;