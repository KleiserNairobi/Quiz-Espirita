import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

type Props = {
  error: boolean;
  isFocused: boolean;
  platform: string;
  multiline?: boolean;
};

type PropsTextInput = {
  error: boolean;
  platform: string;
  isFocused: boolean;
};

export const Container = styled.View`
  flex-direction: column;
  margin-bottom: ${verticalScale(20)}px;
`;

export const MyLabel = styled.Text`
  margin-bottom: ${verticalScale(4)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `};
`;

export const InputContainer = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: ${({platform}) =>
    platform === 'ios' ? verticalScale(10) : 0}px;
  padding-bottom: ${({platform}) =>
    platform === 'ios' ? verticalScale(10) : 0}px;
  background-color: ${({theme}) => theme.colors.terciary};
  ${({theme, error, isFocused}) => {
    if (error) {
      return css`
        border-color: ${theme.colors.optionErrorBorder};
      `;
    } else if (isFocused) {
      return css`
        border-color: ${theme.colors.primary};
      `;
    } else {
      return css`
        border-color: ${theme.colors.optionNormalBorder};
      `;
    }
  }}
`;

export const IconLeft = styled.View`
  padding-right: 10px;
`;

export const IconRight = styled.TouchableOpacity``;

export const StyledTextInput = styled.TextInput<PropsTextInput>`
  flex: 1;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
  ${({theme, error, isFocused}) => {
    if (error) {
      return css`
        border-color: ${theme.colors.optionErrorBorder};
      `;
    } else if (isFocused) {
      return css`
        border-color: ${theme.colors.primary};
      `;
    } else {
      return css`
        border-color: ${theme.colors.optionNormalBorder};
      `;
    }
  }}
`;

export const StyleError = styled.Text`
  margin-top: ${verticalScale(4)}px;
  ${({theme}) => css`
    color: ${theme.colors.optionErrorBorder};
    font-size: ${RFValue(theme.fontSize.xs)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;
