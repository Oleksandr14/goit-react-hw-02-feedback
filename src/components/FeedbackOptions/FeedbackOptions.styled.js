import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.l}px;
`;

export const Button = styled.button`
  display: inline-flex;
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 8px;
`;
