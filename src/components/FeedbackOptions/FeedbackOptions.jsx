import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import { Title, Button } from './FeedbackOptions.styled';
import { Box } from '../Box';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box as="ul">
      <Title>Please leave feedback</Title>
      <Box display="flex" gridGap={3}>
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
      </Box>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
