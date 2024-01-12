import {RFValue} from 'react-native-responsive-fontsize';
import {verticalScale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 24px;
  margin-right: 24px;
  align-items: center;
  justify-content: center;
`;

export const StarsAndBooks = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 24%;
`;

export const Subcategory = styled.Text`
  margin-top: ${verticalScale(32)}px;
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const Category = styled.Text`
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const BoxRow = styled.View`
  width: 100%;
  margin-top: ${verticalScale(16)}px;
  flex-direction: row;
  justify-content: space-around;
`;

export const BoxColumn = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Points = styled.Text`
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.cardProgressPrimary};
    font-size: ${RFValue(theme.fontSize.xl3)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const TitlePoints = styled.Text`
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const Title = styled.Text`
  margin-top: ${verticalScale(32)}px;
  margin-bottom: ${verticalScale(8)}px;
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.xl)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const Message = styled.Text`
  margin-bottom: ${verticalScale(50)}px;
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;
