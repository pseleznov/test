import { connect } from "react-redux"
import Header from './Header'
import {setLanguage} from './../../Store/headerReducer'

const mapStateToProps = (state) => {
    return {
        currentData: state.headerPart.CurrentData
    }
}

export default connect(mapStateToProps,{setLanguage})(Header);