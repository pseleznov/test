import { connect } from "react-redux"
import Body from "./Body";

const mapStateToProps = (state) => {
    return {
        headers: state.bodyPart.secondPart.headers,
        text: state.bodyPart.secondPart.smallBannerText,
        calculation: state.bodyPart.secondPart.fastCalculationText
    }
}

export default connect(mapStateToProps,{})(Body);