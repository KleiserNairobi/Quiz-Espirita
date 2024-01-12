import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: ${verticalScale(140)}px;
  padding-top: ${verticalScale(30)}px;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  ${({theme}) => css`
    background-color: ${theme.colors.bottonNavigationBack};
  `};
`;

export const Content = styled.View`
  flex: 1;
  position: relative;
  margin-top: 10px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ColumnLogo = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${verticalScale(50)}px;
  width: ${verticalScale(50)}px;
`;

export const TitleLogo = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleQuiz}
    font-size: ${RFValue(theme.fontSize.xl7)}px;
    font-family: ${theme.fontFamily.courgette.regular};
  `};
`;

export const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: ${verticalScale(20)}px;
  margin-bottom: ${verticalScale(20)}px;
`;

export const TitleHeader = styled.Text`
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.titleBold}
    font-size: ${RFValue(theme.fontSize.xl2)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `};
`;

export const SubtitleHeader = styled.Text`
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.titleBold}
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `};
`;

export const SpaceButton = styled.View`
  margin-top: ${verticalScale(15)}px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  margin-top: ${verticalScale(20)}px;
  margin-bottom: ${verticalScale(30)}px;
`;

export const Login = styled.Text`
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.titleBold}
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `};
`;

export const LinkLogin = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.primary}
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `};
`;

export const ContainerModal = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
`;
