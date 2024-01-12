import React from 'react';
import {Image, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';
import {Container, Title} from './styles';
import Icon from 'react-native-remix-icon';
import {scale} from 'react-native-size-matters';

type Props = TouchableOpacityProps & {
  title: string;
  iconName: string;
  iconSize: number;
  active: boolean;
};

export function ButtonNavigation({
  title,
  iconName,
  iconSize,
  active = false,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <Icon
        name={iconName}
        size={scale(iconSize)}
        color={
          active ? theme.colors.accented : theme.colors.bottonNavigationTitle
        }
      />
      <Title active={active}>{title}</Title>
    </Container>
  );
}
