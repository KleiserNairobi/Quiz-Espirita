import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  padding: ${verticalScale(16)}px;
  margin-bottom: ${verticalScale(16)}px;
  border-width: 1px;
  border-radius: 8px;
  ${({theme}) => css`
    border-color: ${theme.colors.cardQuizBorder};
    background-color: ${theme.colors.cardQuizBackground};
  `}
`;

export const BoxRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxColumnLeft = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const BoxColumnCenter = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuizName = styled.Text`
  flex-flow: wrap;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const DateTime = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleLight};
    font-size: ${RFValue(theme.fontSize.xs)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;

export const Percentage = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.accented};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const TextPercentage = styled.Text`
  margin-top: ${verticalScale(4)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;

export const BoxStar = styled.View`
  margin-top: ${verticalScale(4)}px;
  flex-direction: row;
`;
