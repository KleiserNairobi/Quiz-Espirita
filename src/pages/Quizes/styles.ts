import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {scale, verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 24px;
  margin-right: 24px;
`;

export const ContainerModal = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Subcategory = styled.Text`
  margin-bottom: ${verticalScale(24)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const Quiz = styled.Text`
  margin-bottom: ${verticalScale(24)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.xl)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const ButtonBox = styled.View`
  width: 100%;
  margin-top: ${verticalScale(40)}px;
  margin-bottom: ${verticalScale(120)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BoxBackButton = styled.View`
  width: 48%;
`;

export const BoxNextButton = styled.View`
  width: 48%;
`;
