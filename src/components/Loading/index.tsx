import React from 'react';
import {useTheme} from 'styled-components/native';
import {ActivityIndicator} from 'react-native';
import {Container} from './styles';

type Props = {
  background?: boolean;
};

export function Loading({background = true}: Props) {
  const theme = useTheme();
  return (
    <Container darkBackground={background}>
      <ActivityIndicator color={theme.colors.primary} size='large' />
    </Container>
  );
}
