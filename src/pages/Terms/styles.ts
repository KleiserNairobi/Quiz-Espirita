import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 24px;
  margin-right: 24px;
`;

export const Title = styled.Text`
  margin-top: ${verticalScale(20)}px;
  margin-bottom: ${verticalScale(16)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.xl3)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const Subtitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const ContainerItem = styled.View`
  margin-top: ${verticalScale(10)}px;
  padding-top: ${verticalScale(16)}px;
  padding-bottom: ${verticalScale(16)}px;
  padding-left: ${verticalScale(24)}px;
  padding-right: ${verticalScale(48)}px;
  flex-direction: column;
  border-width: 1px;
  border-radius: 16px;
  ${({theme}) => css`
    border-color: ${theme.colors.optionNormalBorder};
    background-color: ${theme.colors.terciary};
  `}
`;

export const ContainerItem2 = styled.View`
  margin-top: ${verticalScale(10)}px;
  padding-top: ${verticalScale(16)}px;
  padding-bottom: ${verticalScale(16)}px;
  padding-left: ${verticalScale(24)}px;
  padding-right: ${verticalScale(24)}px;
  flex-direction: column;
  border-width: 1px;
  border-radius: 16px;
  ${({theme}) => css`
    border-color: ${theme.colors.optionNormalBorder};
    background-color: ${theme.colors.terciary};
  `}
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Item = styled.Text`
  margin-top: ${verticalScale(24)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.xl)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const Subitem = styled.Text`
  margin-bottom: ${verticalScale(8)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;

export const Description = styled.Text`
  margin-left: 8px;
  margin-bottom: ${verticalScale(8)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;

export const Update = styled.Text`
  margin-top: ${verticalScale(30)}px;
  margin-bottom: ${verticalScale(50)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;
