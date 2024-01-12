import styled, {css} from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const GreetingBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${verticalScale(40)}px;
  margin-left: 24px;
  margin-right: 24px;
`;

export const Greeting = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const Title = styled.Text`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: ${verticalScale(4)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const Category = styled.Text`
  margin-left: 24px;
  margin-right: 24px;
  margin-top: ${verticalScale(20)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.xl3)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;
