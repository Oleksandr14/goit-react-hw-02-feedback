import { Component } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';

import { Statistics } from './Statistics/Statistics';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Section } from './Section/Section';

import { Notification } from './Notification/Notification';

import { Box } from './Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prev => {
      return { [option]: prev[option] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.round((good * 100) / totalFeedback);
    return (
      <div>
        <Box
          width={480}
          ml="auto"
          mr="auto"
          boxShadow={
            '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)'
          }
        >
          <Section>
            <FeedbackOptions
              title="Please leave feedback"
              options={Object.keys(this.state)}
              onLeaveFeedback={this.leaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            {totalFeedback ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positiveFeedback ? positiveFeedback : 0}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Box>
        <GlobalStyle />
      </div>
    );
  }
}
