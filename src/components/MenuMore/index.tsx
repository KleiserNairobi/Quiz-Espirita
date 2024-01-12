import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from 'react-native-remix-icon';
import {BoxTitle, Button, Title} from './styles';
import {verticalScale} from 'react-native-size-matters';

type Props = TouchableOpacityProps & {
  title: string;
  iconName: string;
};

export function MenuMore({iconName, title, ...rest}: Props) {
  const theme = useTheme();
  return (
    <Button {...rest}>
      <BoxTitle>
        <Icon
          name={iconName}
          size={verticalScale(24)}
          color={theme.colors.primary}
        />
        <Title>{title}</Title>
      </BoxTitle>
      <Icon
        name='arrow-right-s-line'
        size={verticalScale(24)}
        color={theme.colors.titleNormal}
      />
    </Button>
  );
}
