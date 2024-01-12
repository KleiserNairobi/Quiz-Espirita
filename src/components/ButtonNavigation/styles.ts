import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

type TitleProps = {
  active: boolean;
};

export const Container = styled.TouchableOpacity`
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.Text<TitleProps>`
  margin-top: ${verticalScale(4)}px;
  ${({theme, active}) => css`
    color: ${active
      ? theme.colors.bottonNavigationTitleFocus
      : theme.colors.bottonNavigationTitle};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${active
      ? theme.fontFamily.nunito.bold
      : theme.fontFamily.nunito.medium};
  `}
`;
