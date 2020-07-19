import React from 'react';
import Halftones from '../assets/img/Halftones.png';

const halftonesStyle = {
    backgroundImage: `url(${Halftones})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat'
}

function halftones() {
    return (
        <div style={halftonesStyle} className="halftonesBG"/> 
    )
}

export default halftones; 