import React, {useContext} from 'react';
import {Text} from 'react-native';
import {useTheme} from 'styled-components';
import CircularProgress from 'react-native-circular-progress-indicator';
import {Container, Subtitle, Title} from './styles';

export function CardContinue() {
  const theme = useTheme();
  return (
    <Container>
      <CircularProgress
        value={50}
        radius={24}
        valueSuffix={'%'}
        activeStrokeWidth={5}
        activeStrokeColor={theme.colors.cardContinuePercentage}
        inActiveStrokeWidth={5}
        inActiveStrokeColor={theme.colors.cardContinuePercentage}
        inActiveStrokeOpacity={0.5}
        progressValueColor={theme.colors.cardContinuePercentage}
        progressValueFontSize={theme.fontSize.xs}
        progressValueStyle={{fontFamily: theme.fontFamily.nunito.semiBold}}
      />
      <Title>Nome do quiz</Title>
      <Subtitle>10 questões</Subtitle>
    </Container>
  );
}
