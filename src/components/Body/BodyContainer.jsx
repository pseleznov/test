import { connect } from "react-redux"
import Body from "./Body";

const mapStateToProps = (state) => {
    return {
        firstline: state.partBody.firstPart.bigBannerText.firstline,
        secondline: state.partBody.firstPart.bigBannerText.secondline
    }
}

export default connect(mapStateToProps,{})(Body);