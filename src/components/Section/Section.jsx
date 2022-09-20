import PropTypes from 'prop-types';

import { AppContainer, Title } from '../Section/Section.styled';

export const Section = ({ children, title }) => {
  return (
    <AppContainer>
      <Title>{title}</Title>
      {children}
    </AppContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
