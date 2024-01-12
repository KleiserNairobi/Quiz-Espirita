import {RFValue} from 'react-native-responsive-fontsize';
import {scale, verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${verticalScale(40)}px;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${scale(40)}px;
  height: ${scale(40)}px;
  border-radius: ${scale(20)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.buttonBack};
`;

export const Category = styled.Text`
  margin-left: 8px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;
