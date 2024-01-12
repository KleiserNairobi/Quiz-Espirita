import styled, {css} from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  imageWidth: number;
  imageHeight: number;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 24px;
  margin-right: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BoxImage = styled.View<Props>`
  ${({imageWidth, imageHeight}) => css`
    width: ${imageWidth}%;
    height: ${imageHeight}px;
  `}
`;

export const ImageWelcome = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  margin-top: ${verticalScale(20)}px;
  margin-bottom: ${verticalScale(10)}px;
  ${({theme}) => css`
    color: ${theme.colors.titleBold};
    font-size: ${RFValue(theme.fontSize.xl)}px;
    font-family: ${theme.fontFamily.nunito.bold};
  `}
`;

export const BoxButtonAction = styled.View`
  margin-top: ${verticalScale(40)}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
