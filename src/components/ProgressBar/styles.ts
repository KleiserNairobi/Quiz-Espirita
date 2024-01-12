import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

type ProgressType = {
  current: number;
  total: number;
};

export const Container = styled.View`
  width: 100%;
  margin-top: ${verticalScale(8)}px;
  margin-bottom: ${verticalScale(24)}px;
  flex-direction: column;
`;

export const QuestionBox = styled.View`
  width: 100%;
  margin-top: ${verticalScale(6)}px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const QuestionTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleLight};
    font-size: ${RFValue(theme.fontSize.xs)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const QuestionCurrent = styled.Text`
  margin-left: 4px;
  margin-right: 2px;
  ${({theme}) => css`
    color: ${theme.colors.titleLight};
    font-size: ${RFValue(theme.fontSize.xs)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const QuestionTotal = styled.Text`
  margin-left: 2px;
  ${({theme}) => css`
    color: ${theme.colors.titleLight};
    font-size: ${RFValue(theme.fontSize.xs)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const Bar = styled.View`
  height: ${verticalScale(8)}px;
  width: 100%;
  margin-top: ${verticalScale(8)}px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const Progress = styled.View<ProgressType>`
  height: ${verticalScale(8)}px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.primary};
  width: ${({current, total}) => Math.round((current / total) * 100)}%;
`;
