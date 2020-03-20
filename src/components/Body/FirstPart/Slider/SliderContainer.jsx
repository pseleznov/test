import { connect } from 'react-redux'
import Slider from './Slider'
import setPicture from '../../../../Store/bodyReducer'


const mapStateToProps = (state) => {
    return {
        image: state.partBody.firstPart.images[1],
        id: state.partBody.firstPart.curcurrentImgIndex
    }
}

export default connect(mapStateToProps,{setPicture})(Slider);
