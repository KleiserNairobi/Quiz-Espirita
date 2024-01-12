import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

type Props = {
  checked: boolean;
  success: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: ${verticalScale(12)}px ${verticalScale(16)}px;
  margin-bottom: ${verticalScale(16)}px;
  border-radius: 16px;
  border-width: 1px;
  ${({theme, checked, success}) => css`
    border-color: ${!checked
      ? theme.colors.optionNormalBorder
      : success
      ? theme.colors.optionSuccessBorder
      : theme.colors.optionErrorBorder};
    background-color: ${!checked
      ? theme.colors.optionNormalBackground
      : success
      ? theme.colors.optionSuccessBackground
      : theme.colors.optionErrorBackground};
  `}
`;

export const Box = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxTitle = styled.View`
  width: 90%;
  justify-content: center;
`;

export const BoxIcon = styled.View`
  width: 10%;
  align-items: flex-end;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  ${({theme, checked}) => css`
    color: ${checked
      ? theme.colors.optionSelectedTitle
      : theme.colors.optionNormalTitle};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${checked
      ? theme.fontFamily.nunito.semiBold
      : theme.fontFamily.nunito.regular};
  `}
`;
