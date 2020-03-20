import firstPicture from '../assets/images/Rectangle.svg'
import secondPicture from '../assets/images/search.svg'
const SET_PICTURE = "SET-PICTURE";

let initialState = {
    firstPart: {
        images: [
            firstPicture,
            secondPicture
        ],
        currentImgIndex: 1
    }
}

const bodyReducer = (state = initialState, action) => {

    switch (SET_PICTURE){
        case SET_PICTURE: {
            return {
                ...state,
                currentImgIndex: action.number
            };
        }
        default: {
            return state;
        }
    }
}

export  const setPicture = (number) => ({ type: SET_PICTURE, number});

export default bodyReducer;