import React from "react";
import "./imageFrame.css";

const imageFrame = (props) => (
  <img className={"col-md-3 col-sm-4 col-xs-12 pb-4 imageFrame rounded-circle " + (props.gameStatus == "2" ? " gameLost" : (props.gameStatus == "1" ? " gameWon" : ""))} src={process.env.PUBLIC_URL + "/images/" + props.imageName} alt={props.alt} height={props.imageFrameHeight} width={props.imageFrameWidth} onClick={props.clickHandler} />
);

export default imageFrame;