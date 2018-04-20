import React, { Component } from "react";
import Header from "../Header";
import Container from "../Container";
import GameCards from "../GameCards";
import data from "../../data.json";
import Score from "../Score";

class Game extends Component {
  state = {
    data,
    score: 0,
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

  handleCorrectClick = newData => {
    const {score} = this.state;
    const newScore = score + 1;
    this.setState({
      data: this.shuffleData(newData),
      score: newScore,
    });
  };

  handleWrongClick = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  handleGameCardClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectClick(newData)
      : this.handleWrongClick(newData);
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <Container>
          {this.state.data.map(item => (
            <GameCards
              key={item.id}
              id={item.id}
              shake={!this.state.score }
              handleClick={this.handleGameCardClick}
              image={item.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Game;
