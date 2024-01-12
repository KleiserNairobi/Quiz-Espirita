import React from 'react';
import Icon from 'react-native-remix-icon';
import {TouchableOpacityProps} from 'react-native';
import {BackButton, Category, Container} from './styles';
import {useTheme} from 'styled-components';
import {scale} from 'react-native-size-matters';

type HeaderType = TouchableOpacityProps & {
  title?: string;
};

export function Header({title, ...rest}: HeaderType) {
  const theme = useTheme();
  return (
    <Container>
      <BackButton {...rest}>
        <Icon
          name='arrow-left-line'
          size={scale(20)}
          color={theme.colors.buttonBackTitle}
        />
      </BackButton>
      {title && <Category>{title}</Category>}
    </Container>
  );
}
