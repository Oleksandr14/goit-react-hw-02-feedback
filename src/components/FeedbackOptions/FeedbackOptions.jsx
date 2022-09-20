import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import { Title, Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback, title }) => {
  return (
    <>
      <Title>{title}</Title>
      <List>
        {options.map(option => {
          return (
            <li key={uuidv4()}>
              <Button
                Button
                type="button"
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </Button>
            </li>
          );
        })}
      </List>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
