import React, { Component } from "react";
import ImageNames from "./ImageNames";
import Navbar from "./components/Navbar";
import imageRow from "./components/imageRow";
import Footer from "./components/Footer";


class App extends Component {
	state = {
    imageNames: ImageNames,
    clickedImages: [],
    score: 0,
    topScore: 0,
    feedback: "Click an image to begin!",
    gameStatus: 0
  };

  componentDidMount() {
    this.setState({
      ImageNames: this.shuffle(this.state.ImageNames)
    }, () => {
      console.log("Shuffled the images on game start");
    });
  }

  handleClick = event => {
    const clickedimageName = event.target.alt;
    const wasImageClickedBefore = this.imageClickedBefore(clickedImageName);
    if (wasImageClickedBefore) {
      this.setState({
        ImageNames: this.shuffle(this.state.ImageNames),
        clickedImages: [],
        score: 0,
        feedback: "Game Over! You Guessed The Same Image Twice!",
        gameStatus: 2
      }, () => {
      });
    } else {
      let newScore = this.state.score + 1;
      if (newScore === this.state.ImageNames.length) {
        this.setState({
        ImageNames: this.shuffle(this.state.ImageNames),
          clickedImages: [],
          score: 0,
          topScore: newScore,
          feedback: "Congrats! You Have Guessed All Of The Images Correctly!",
          gameStatus: 1
          });
      } else {
        const clickedImagesCopy = this.state.clickedImages.slice();
        clickedImagesCopy.push(clickedImageName);
        const newTopScore = (newScore > this.state.topScore) ? newScore : this.state.topScore;
        this.setState({
        ImageNames: this.shuffle(this.state.ImageNames),
          clickedImages: clickedImagesCopy,
          score: newScore,
          topScore: newTopScore,
          feedback: "Yes! You Guessed The Image Correctly!",
          gameStatus: 0
          }, () => {
          // console.log("IF block state AFTER CORRECT GUESS: " + JSON.stringify(this.state));
        });
      }
    }
  };

  imageClickedBefore = (clickedImageFileName) => {
  	for (let index=0; index<this.state.clickedImages.length; index++) {
  		if (this.state.clickedImages[index] === clickedImageFileName) {
        return true;
      }
    }
    return false;
  };

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
   return (
    <div>
      <Navbar score={this.state.score} topScore={this.state.topScore} feedback={this.state.feedback} gameStatus={this.state.gameStatus} />
      <imageRow imageFileNames={this.state.imageNames} clickHandler={this.handleClick} gameStatus={this.state.gameStatus} />
      <Footer />
    </div>
    );
  }
}

export default App;