import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: ${p => p.theme.space[4]}px;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.primary};
`;
