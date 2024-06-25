import React, { Component } from "react";
import {
  GoodBtn,
  Heading,
  NeutralBtn,
  BadBtn,
  ButtonsContainer,
  ListItem,
  RenderFeedback,
} from "./style";
import Notifications from "../Notification/Notifications";

class ExpressoStat extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState({ good: this.state.good + 1 });
  };

  incrementNeutal = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  incrementBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Heading>Review statistics</Heading>
        <ButtonsContainer>
          <GoodBtn onClick={this.incrementGood}>Good</GoodBtn>
          <NeutralBtn onClick={this.incrementNeutal}>Neutral</NeutralBtn>
          <BadBtn onClick={this.incrementBad}>Bad</BadBtn>
        </ButtonsContainer>

        {totalFeedback > 0 ? (
          <RenderFeedback>
            <ListItem>
              <h5>Good:</h5> <span>{this.state.good}</span>
            </ListItem>
            <ListItem>
              <h5>Neutral:</h5> <span>{this.state.neutral}</span>
            </ListItem>
            <ListItem>
              <h5>Bad:</h5> <span>{this.state.bad}</span>
            </ListItem>
            <ListItem>
              <h5>Total Feedback:</h5> <span>{totalFeedback}</span>
            </ListItem>
            <ListItem>
              <h5>Positive Feedback Percentage:</h5>{" "}
              <span>{positiveFeedbackPercentage}%</span>
            </ListItem>
          </RenderFeedback>
        ) : (
          <Notifications message="There is no feedback :(" />
        )}
      </>
    );
  }
}

export default ExpressoStat;
