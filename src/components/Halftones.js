import React from 'react';
import Halftones from '../assets/img/Halftones.png';

const halftonesStyle = {
    backgroundImage: `url(${Halftones})`,
    backgroundPosition: 'center',
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'repeat',
}

function halftones() {
    return (
        <div style={halftonesStyle} className="halftonesBG"/> 
    )
}

export default halftones; 