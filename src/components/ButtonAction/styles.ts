import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

type Props = {
  disabled?: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: ${verticalScale(16)}px;
  border-radius: 30px;
  align-items: center;
  ${({theme, disabled}) => css`
    background-color: ${disabled
      ? theme.colors.secondary
      : theme.colors.primary};
  `}
`;

export const Title = styled.Text<Props>`
  ${({theme, disabled}) => css`
    color: ${disabled ? theme.colors.titleLight : theme.colors.titleBlack};
    font-size: ${RFValue(theme.fontSize.xl)}px;
    font-family: ${disabled
      ? theme.fontFamily.nunito.medium
      : theme.fontFamily.nunito.bold};
  `}
`;
