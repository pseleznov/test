import React from 'react'
import './GridBlock.css'
import SmallBanner from '../../../../Banners/SmallBanner/SmallBanner'

const GridBlock = (props) => {
    return (
        <div className="gridBlock">
            <div className="gridBlockImg"> 
                <img src={props.state.img} alt=""/>
            </div>
            <SmallBanner text={props.state.text} />
        </div>
    );
}

export default GridBlock;