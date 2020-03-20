import firstPicture from '../assets/images/Rectangle.svg'

let initialState = {
    firstPart: {
        images: [
            firstPicture
        ],
        currentImgIndex: 1
    }
}

const bodyReducer = (state = initialState, action) => {

    return state;
}

export default bodyReducer;