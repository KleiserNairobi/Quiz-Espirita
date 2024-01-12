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
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.xl3)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const Subtitle = styled.Text`
  margin-top: ${verticalScale(8)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const BoxPath = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${verticalScale(30)}px;
  margin-bottom: ${verticalScale(60)}px;
`;

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitlePath = styled.Text`
  margin-left: 4px;
  padding-top: 3px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const DescriptionPath = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const BoxLoading = styled.View`
  margin-top: ${verticalScale(20)}px;
  margin-bottom: ${verticalScale(20)}px;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
})`
  margin-top: ${verticalScale(10)}px;
  margin-bottom: ${verticalScale(10)}px;
`;

export const TitleLoading = styled.Text`
  margin-bottom: 30px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;
