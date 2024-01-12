import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const ButtonHelp = styled.TouchableOpacity`
  padding: ${verticalScale(10)}px;
  margin-bottom: ${verticalScale(16)}px;
  flex-direction: column;
  border-width: 1px;
  border-radius: 8px;
  ${({theme}) => css`
    border-color: ${theme.colors.optionNormalBorder};
    background-color: ${theme.colors.optionNormalBackground};
  `}
`;

export const ButtonHelpBoxTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonHelpBoxTitleWrapper = styled.View`
  flex: 1;
  flex-flow: wrap;
`;

export const ButtonHelpTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const ButtonHelpContent = styled.Text`
  margin-top: ${verticalScale(8)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;
