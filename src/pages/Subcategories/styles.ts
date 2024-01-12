import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 24px;
  margin-right: 24px;
`;

export const Category = styled.Text`
  margin-top: ${verticalScale(20)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.xl3)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const Description = styled.Text`
  margin-top: ${verticalScale(8)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const Continue = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.xl)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const Quizes = styled.Text`
  margin-top: ${verticalScale(32)}px;
  margin-bottom: ${verticalScale(16)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.xl)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 0px;
`;

export const ContainerModal = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
