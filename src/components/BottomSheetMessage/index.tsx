import React from 'react';
import {useTheme} from 'styled-components/native';
import Icon from 'react-native-remix-icon';
import {scale} from 'react-native-size-matters';
import {MessageType} from '@models/Utils';

import {
  BoxButton,
  ButtonPrimary,
  ButtonSecondary,
  Container,
  Subtitle,
  Title,
  TitleButtonPrimary,
  TitleButtonSecondary,
} from './styles';

type Props = {
  type: MessageType;
  title: string;
  subtitle: string;
  titleButtonPrimary?: string;
  titleButtonSecondary?: string;
  onPressPrimary: () => void;
  onPressSecondary?: () => void;
};

export function BottomSheetMessage({
  type,
  title,
  subtitle,
  titleButtonPrimary,
  titleButtonSecondary,
  onPressPrimary,
  onPressSecondary,
}: Props) {
  const theme = useTheme();

  return (
    <Container>
      {type && type === 'error' && (
        <Icon
          name='close-circle-fill'
          size={scale(40)}
          color={theme.colors.primary}
        />
      )}
      {type && type === 'success' && (
        <Icon
          name='checkbox-circle-fill'
          size={scale(40)}
          color={theme.colors.primary}
        />
      )}
      {type && type === 'information' && (
        <Icon
          name='error-warning-fill'
          size={scale(40)}
          color={theme.colors.primary}
        />
      )}
      {type && type === 'question' && (
        <Icon
          name='question-fill'
          size={scale(40)}
          color={theme.colors.primary}
        />
      )}

      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <BoxButton>
        {onPressSecondary && (
          <ButtonSecondary onPress={onPressSecondary}>
            <TitleButtonSecondary>
              {titleButtonSecondary ? titleButtonSecondary : 'Não'}
            </TitleButtonSecondary>
          </ButtonSecondary>
        )}
        <ButtonPrimary onPress={onPressPrimary}>
          <TitleButtonPrimary>
            {titleButtonPrimary ? titleButtonPrimary : 'Sim'}
          </TitleButtonPrimary>
        </ButtonPrimary>
      </BoxButton>
    </Container>
  );
}
