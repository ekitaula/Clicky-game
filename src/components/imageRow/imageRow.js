import React from "react";
import "./imageFrame.css";
import imageFrame from "../imageFrame";

const ImageRow = (props) => (
	<div className="container">
		<div className="row">
	    {props.imageNames.map((imageName, index) => {
	      return <imageFrame key={index} imageName={imageName} alt={imageName} clickHandler={props.clickHandler} gameStatus={props.gameStatus} />
	    })}
	  </div>
  </div>
);

export default ImageBlockListing;