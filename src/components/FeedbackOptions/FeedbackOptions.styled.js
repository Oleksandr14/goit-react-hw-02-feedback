import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
`;

export const Button = styled.button`
padding: ${p => p.theme.space[1]}px;
}
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
`;
