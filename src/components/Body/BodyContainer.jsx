import { connect } from "react-redux"
import Body from "./Body";

const mapStateToProps = (state) => {
    return {
        headers: state.bodyPart.secondPart.headers,
        text: state.bodyPart.secondPart.smallBannerText,
        buttonText: state.bodyPart.secondPart.buttonText,
        smallBanner: state.bodyPart.secondPart.smallBanner,
        topBanner: state.bodyPart.thirdPart.topBanner,
        bottomBanner: state.bodyPart.thirdPart.bottomBanner
    }
}

export default connect(mapStateToProps,{})(Body);