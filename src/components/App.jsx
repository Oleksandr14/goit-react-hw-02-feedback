import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';

import { Statistics } from './Statistics/Statistics';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Section } from './Section/Section';

import { Notification } from './Notification/Notification';

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
        <div>
          <Section>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.leaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            {good || neutral || bad ? (
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
        </div>
        <GlobalStyle />
      </div>
    );
  }
}
