import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {scale} from 'react-native-size-matters';
import styled, {css} from 'styled-components/native';

const cardsPerRow = 2;
const cardPadding = 24 * 2;
const cardMargin = 8 * 2;
const dimensions = Dimensions.get('window');
const cardWidth = (dimensions.width - cardPadding - cardMargin) / cardsPerRow;

export const Container = styled.TouchableOpacity`
  height: ${scale(136)}px;
  width: ${cardWidth}px;
  overflow: hidden;
  margin-right: ${scale(12)}px;
  margin-bottom: ${scale(12)}px;
  border-width: 1px;
  border-radius: 8px;
  ${({theme}) => css`
    border-color: ${theme.colors.cardProgressBorder};
    background-color: ${theme.colors.cardProgressBackground};
  `}
`;

export const BackImage = styled.ImageBackground.attrs({
  resizeMode: 'stretch',
})`
  flex: 1;
  padding: ${scale(16)}px;
`;

export const ImageDataColumn = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const ColumnTitle = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  padding-top: ${scale(8)}px;
  ${({theme}) => css`
    color: ${theme.colors.cardTitle};
    font-size: ${RFValue(theme.fontSize.lg)}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const Subtitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.cardSubtitle};
    font-size: ${RFValue(theme.fontSize.sm)}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;
