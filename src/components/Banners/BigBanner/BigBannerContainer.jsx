import { connect } from "react-redux"
import BigBanner from "./BigBanner"

const mapStateToProps = (state) => {
    return {
        firstline: state.bodyPart.firstPart.bigBannerText.firstline,
        secondline: state.bodyPart.firstPart.bigBannerText.secondline
    }
}

export default connect(mapStateToProps,{})(BigBanner);