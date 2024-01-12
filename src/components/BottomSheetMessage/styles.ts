import {RFValue} from 'react-native-responsive-fontsize';
import {scale, verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  margin: ${scale(10)}px;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.Text`
  text-align: center;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: ${verticalScale(8)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;
  padding-left: 24px;
  padding-right: 24px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const BoxButton = styled.View`
  margin-top: ${verticalScale(20)}px;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonSecondary = styled.TouchableOpacity`
  width: ${scale(80)}px;
  padding: ${verticalScale(8)}px;
  border-width: 2px;
  border-radius: 18px;
  align-items: center;
  ${({theme}) => css`
    border-color: ${theme.colors.buttonActionOutileneBorder};
  `}
`;

export const ButtonPrimary = styled.TouchableOpacity`
  width: ${scale(80)}px;
  padding: ${verticalScale(8)}px;
  border-radius: 18px;
  align-items: center;
  margin-left: 10px;
  ${({theme}) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const TitleButtonPrimary = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleBlack};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const TitleButtonSecondary = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;
