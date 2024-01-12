import styled, {css} from 'styled-components/native';
import {scale, verticalScale} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 24px;
  margin-right: 24px;
`;

export const Wrapper = styled.View`
  width: 100%;
  margin-top: ${verticalScale(32)}px;
`;

export const BoxItems = styled.View`
  flex-direction: column;
  margin-top: ${verticalScale(30)}px;
`;

export const BoxVersion = styled.View`
  flex-direction: column;
  margin-top: ${verticalScale(30)}px;
`;

export const Version = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleLight};
    font-size: ${RFValue(theme.fontSize.xs)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${verticalScale(10)}px;
`;

export const RowTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.medium};
  `}
`;

export const ContainerModal = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TitleModal = styled.Text`
  text-align: center;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: ${verticalScale(8)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const SubtitleModal = styled.Text`
  text-align: center;
  padding-left: 24px;
  padding-right: 24px;
  ${({theme}) => css`
    color: ${theme.colors.titleNormal};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const RowModal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: ${verticalScale(30)}px;
  margin-bottom: ${verticalScale(30)}px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const ShareButton = styled.TouchableOpacity`
  width: ${scale(44)}px;
  height: ${scale(44)}px;
  border-radius: ${scale(22)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.buttonBack};
`;

export const ButtonPrimary = styled.TouchableOpacity`
  width: ${scale(80)}px;
  padding: ${verticalScale(8)}px;
  border-radius: 18px;
  margin-left: 10px;
  ${({theme}) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const TitleButtonPrimary = styled.Text`
  text-align: center;
  ${({theme}) => css`
    color: ${theme.colors.titleBlack};
    font-size: ${RFValue(theme.fontSize.md)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const ViewButton = styled.View`
  align-items: center;
`;
