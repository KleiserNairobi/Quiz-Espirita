import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Subtitle, Title} from './styles';

type CardType = TouchableOpacityProps & {
  title: string;
  subtitle: string;
};

export function CardSubcategory({title, subtitle, ...rest}: CardType) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
