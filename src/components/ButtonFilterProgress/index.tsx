import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ButtonFilter, Title} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  active: boolean;
};

export function ButtonFilterProgress({title, active, ...rest}: Props) {
  return (
    <ButtonFilter active={active} {...rest}>
      <Title active={active}>{title}</Title>
    </ButtonFilter>
  );
}
