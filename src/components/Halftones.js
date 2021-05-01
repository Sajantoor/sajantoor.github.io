import React from 'react';
import Halftones from '../assets/img/Halftones.png';

const halftonesStyle = {
    backgroundImage: `url(${Halftones})`,
    backgroundPosition: '0 0',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'repeat',
}

function halftones() {
    return (
        <div style={halftonesStyle} className="halftonesBG"/> 
    )
}

export default halftones; 