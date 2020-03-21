import { connect } from 'react-redux'
import Slider from './Slider'

const mapStateToProps = (state) => {
    return {
        image: state.bodyPart.firstPart.images,
    }
}

export default connect(mapStateToProps,{})(Slider);
