import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

type Props = {
  active: boolean;
};

export const ButtonFilter = styled.TouchableOpacity<Props>`
  height: 100%;
  margin-right: 8px;
  margin-bottom: ${verticalScale(20)}px;
  border-width: 2px;
  border-radius: 40px;

  ${({theme, active}) => css`
    border-color: ${active ? theme.colors.accented : theme.colors.secondary};
    background-color: ${active ? theme.colors.primary : theme.colors.secondary};
  `}
`;

export const Title = styled.Text<Props>`
  padding: ${verticalScale(8)}px ${verticalScale(20)}px;
  ${({theme, active}) => css`
    color: ${theme.colors.titleBlack};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${active
      ? theme.fontFamily.nunito.bold
      : theme.fontFamily.nunito.medium};
  `}
`;
