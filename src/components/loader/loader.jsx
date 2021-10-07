import React from 'react';
import "./loader.css";
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <Loader
    type="Puff"
    color="#f5a623"
    height={100}
    width={100}
  />
)
}

export default LoaderSpinner;


