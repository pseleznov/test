import React from 'react'
import './Grid.css'
import GridBlock from './GridBlock/GridBlock'

const Grid = () => {
    return (
        <div className="grid">
            <div className="block1"><GridBlock /></div>
            <div className="block2"></div>
            <div className="block3"></div>
            <div className="block4"></div>
            <div className="block5"></div>
            <div className="block6"></div>
            <div className="block7"></div>
            <div className="block8"></div>
        </div>
    );
}

export default Grid;