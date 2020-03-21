import { connect } from "react-redux"
import BigBanner from "./BigBanner"

const mapStateToProps = (state) => {
    return {
        firstline: state.partBody.firstPart.bigBannerText.firstline,
        secondline: state.partBody.firstPart.bigBannerText.secondline
    }
}

export default connect(mapStateToProps,{})(BigBanner);