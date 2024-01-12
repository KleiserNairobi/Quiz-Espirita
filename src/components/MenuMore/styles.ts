import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  padding: ${verticalScale(8)}px;
  margin-bottom: ${verticalScale(8)}px;
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  ${({theme}) => css`
    border-bottom-color: ${theme.colors.bottomNavigationBorder};
  `}
`;

export const Title = styled.Text`
  margin-left: 10px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const BoxTitle = styled.View`
  flex-direction: row;
`;
