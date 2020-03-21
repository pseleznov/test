import { connect } from 'react-redux'
import Slider from './Slider'

const mapStateToProps = (state) => {
    return {
        image: state.partBody.firstPart.images,
    }
}

export default connect(mapStateToProps,{})(Slider);
