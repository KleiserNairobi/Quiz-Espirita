import {RFValue} from 'react-native-responsive-fontsize';
import {scale, verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: ${scale(10)}px;
  margin-bottom: ${verticalScale(16)}px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.optionNormalBorder};
  background-color: ${({theme}) => theme.colors.optionNormalBackground};
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.cardQuizTitle};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const Subtitle = styled.Text`
  padding-top: ${verticalScale(4)}px;
  ${({theme}) => css`
    color: ${theme.colors.cardQuizSubtitle};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;
