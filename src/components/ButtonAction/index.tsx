import React from 'react';
import {Container, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

type CardType = TouchableOpacityProps & {
  title: string;
  disabled?: boolean;
};

export function ButtonAction({title, disabled = false, ...rest}: CardType) {
  return (
    <Container disabled={disabled} {...rest}>
      <Title disabled={disabled}>{title}</Title>
    </Container>
  );
}
