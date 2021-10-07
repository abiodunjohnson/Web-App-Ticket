import React from 'react';
import './button.css';
// import { Link } from 'react-router-dom';
const STYLES = [
    "btn_primary_solid",
    "btn_secondary_solid",
    "btn_teritary_solid"
];

const SIZES = [
    "btn_small",
    "btn_medium",
    "btn_large",
    "btn_smaller",
    "btn_smallest"
]
const Button = ({children, type, onClick, buttonSize, buttonStyle }) => {

    const checkStyleButton = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkSizeButton = SIZES.includes(buttonSize)  ? buttonSize : SIZES[0]
    return (
        <>
          <button
          className={ `btn ${checkStyleButton} ${checkSizeButton}` }
          onClick={onClick}
          type={type}
          > {children} </button> 

           
        </>
    )
}

export default Button
