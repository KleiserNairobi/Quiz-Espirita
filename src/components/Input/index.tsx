import React, {useEffect, useRef, useState} from 'react';
import {Platform, TextInput, TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from 'react-native-remix-icon';
import {scale} from 'react-native-size-matters';

import {
  Container,
  MyLabel,
  InputContainer,
  IconLeft,
  StyledTextInput,
  IconRight,
  StyleError,
} from './styles';

type InputProps = TextInputProps & {
  multiline?: boolean;
  label: string;
  error?: string;
  iconName?: string;
  password?: boolean;
  onFocus?: () => void;
};

export function Input({
  multiline = false,
  label,
  error,
  iconName,
  password = false,
  onFocus,
  ...rest
}: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <Container>
      <MyLabel>{label}</MyLabel>
      <InputContainer
        error={error ? true : false}
        isFocused={isFocused}
        platform={Platform.OS}>
        <IconLeft>
          {iconName && (
            <Icon
              name={iconName}
              size={scale(20)}
              color={
                isFocused ? theme.colors.primary : theme.colors.inputPlaceholder
              }
            />
          )}
        </IconLeft>
        <StyledTextInput
          platform={Platform.OS}
          isFocused={isFocused}
          error={error ? true : false}
          secureTextEntry={hidePassword}
          placeholderTextColor={theme.colors.inputPlaceholder}
          onFocus={() => {
            if (onFocus) {
              onFocus();
            }
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...rest}
        />
        {password && (
          <IconRight onPress={() => setHidePassword(!hidePassword)}>
            <Icon
              name={hidePassword ? 'eye-line' : 'eye-off-line'}
              size={scale(20)}
              color={
                isFocused ? theme.colors.primary : theme.colors.inputPlaceholder
              }
            />
          </IconRight>
        )}
      </InputContainer>
      {error && <StyleError>{error}</StyleError>}
    </Container>
  );
}
