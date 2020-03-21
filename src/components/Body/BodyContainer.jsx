import { connect } from "react-redux"
import Body from "./Body";

const mapStateToProps = (state) => {
    return {
        headers: state.bodyPart.secondPart.headers,
        text: state.bodyPart.secondPart.smallBannerText,
        buttonText: state.bodyPart.secondPart.buttonText,
        smallBanner: state.bodyPart.secondPart.smallBanner
    }
}

export default connect(mapStateToProps,{})(Body);