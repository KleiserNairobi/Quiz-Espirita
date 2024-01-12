import styled, {css} from 'styled-components/native';
import {scale, verticalScale} from 'react-native-size-matters';

export const Container = styled.View`
  bottom: 0;
  width: 100%;
  height: ${verticalScale(80)}px;
  padding-left: ${scale(50)}px;
  padding-right: ${scale(50)}px;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-width: 1px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  ${({theme}) => css`
    border-color: ${theme.colors.bottomNavigationBorder};
    background-color: ${theme.colors.bottonNavigationBack};
  `}
`;
