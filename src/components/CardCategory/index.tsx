import React from 'react';
import {ImageSourcePropType, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';
import CircularProgress from 'react-native-circular-progress-indicator';
import {scale} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  BackImage,
  ColumnTitle,
  Container,
  ImageDataColumn,
  Subtitle,
  Title,
} from './styles';

type CardType = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  percentage: number;
  imageBackground: ImageSourcePropType;
};

export function CardCategory({
  title,
  subtitle,
  percentage,
  imageBackground,
  ...rest
}: CardType) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <BackImage source={imageBackground}>
        <ImageDataColumn>
          <CircularProgress
            value={percentage}
            radius={scale(24)}
            valueSuffix={'%'}
            activeStrokeWidth={5}
            activeStrokeColor={theme.colors.cardProgressPrimary}
            inActiveStrokeWidth={5}
            inActiveStrokeColor={theme.colors.cardProgressSecondary}
            inActiveStrokeOpacity={0.7}
            progressValueColor={theme.colors.cardSubtitle}
            progressValueFontSize={RFValue(theme.fontSize.xs)}
            progressValueStyle={{fontFamily: theme.fontFamily.nunito.semiBold}}
          />
          <ColumnTitle>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </ColumnTitle>
        </ImageDataColumn>
      </BackImage>
    </Container>
  );
}
