import styled from 'styled-components';

export const Item = styled.li`
  margin-top: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[2]}px};
  padding-bottom: ${p => p.theme.space[2]}px};
  padding-left: ${p => p.theme.space[2]}px};
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.background};
`;
