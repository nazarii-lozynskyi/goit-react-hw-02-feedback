import React from 'react';

import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';
import Statistics from './statistics/Statistics';

import styles from '../feedback/Feedback.module.css';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leavePositiveFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  leaveNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  leaveNegativeFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback() {
    console.log(this.state.neutral + this.state.bad + this.state.good);
    return this.state.neutral + this.state.bad + this.state.good;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  }

  render() {
    return (
      <Section className={styles.container} title="Please leave feedback">
        <FeedbackOptions
          onLeavePositiveFeedback={this.leavePositiveFeedback}
          onLeaveNeutralFeedback={this.leaveNeutralFeedback}
          onLeaveNegativeFeedback={this.leaveNegativeFeedback}
        />

        {this.state.neutral + this.state.bad + this.state.good ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}

export default Feedback;
