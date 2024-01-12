import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  margin-left: 24px;
  margin-right: 24px;
`;

export const Title = styled.Text`
  margin-top: ${verticalScale(20)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.xl3)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: ${verticalScale(8)}px;
  margin-bottom: ${verticalScale(20)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const CompletedQuizes = styled.Text`
  margin-bottom: ${verticalScale(16)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.xl)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const BoxFlatListEmpty = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageSearch = styled.Image`
  height: ${verticalScale(80)}px;
  width: ${verticalScale(80)}px;
  margin-top: ${verticalScale(20)}px;
`;

export const TitleFlatListEmpty = styled.Text`
  margin-top: ${verticalScale(24)}px;
  margin-bottom: ${verticalScale(8)}px;
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const SubtitleFlatListEmpty = styled.Text`
  text-align: center;
  margin-bottom: ${verticalScale(40)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;
