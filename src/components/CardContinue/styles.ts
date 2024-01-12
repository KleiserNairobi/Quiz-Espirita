import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 136px;
  width: 230px;
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.cardContinueBackground};
`;

export const Title = styled.Text`
  padding-top: 8px;
  ${({theme}) => css`
    color: ${theme.colors.cardTitle};
    font-size: ${theme.fontSize.lg}px;
    font-family: ${theme.fontFamily.nunito.semiBold};
  `}
`;

export const Subtitle = styled.Text`
  padding-top: 4px;
  ${({theme}) => css`
    color: ${theme.colors.cardSubtitle};
    font-size: ${theme.fontSize.sm}px;
    font-family: ${theme.fontFamily.nunito.regular};
  `}
`;
