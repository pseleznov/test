import React from 'react'
import './Grid.css'
import GridBlock from './GridBlock/GridBlock'

const Grid = (props) => {
    return (
        <div className="grid">
            <div className="block1"><GridBlock state={props.smallBanner.first} /></div>
            <div className="block2"><GridBlock state={props.smallBanner.second} /></div>
            <div className="block3"><GridBlock state={props.smallBanner.third} /></div>
            <div className="block4"><GridBlock state={props.smallBanner.fourth} /></div>
            <div className="block5"><GridBlock state={props.smallBanner.fifth} /></div>
            <div className="block6"><GridBlock state={props.smallBanner.sixth} /></div>
            <div className="block7"><GridBlock state={props.smallBanner.seventh} /></div>
            <div className="block8"><GridBlock state={props.smallBanner.eighth} /></div>
        </div>
    );
}

export default Grid;