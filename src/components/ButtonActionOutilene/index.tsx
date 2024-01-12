import React from 'react';
import {Container, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

type CardType = TouchableOpacityProps & {
  title: string;
};

export function ButtonActionOutilene({title, ...rest}: CardType) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
