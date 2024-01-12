import React from 'react';
import Icon from 'react-native-remix-icon';
import {useTheme} from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';
import {
  BoxColumnCenter,
  BoxColumnLeft,
  BoxRow,
  BoxStar,
  Container,
  DateTime,
  Percentage,
  QuizName,
  TextPercentage,
} from './style';

type Props = {
  level: string;
  title: string;
  dateTime: string;
  percentage: string;
};

export function ProgressListItem({level, title, dateTime, percentage}: Props) {
  const theme = useTheme();

  let filledCount = 0;

  switch (level) {
    case 'Fraco':
      filledCount = 1;
      break;
    case 'Regular':
      filledCount = 2;
      break;
    case 'Bom':
      filledCount = 3;
      break;
    case 'Ótimo':
      filledCount = 4;
      break;
    default:
      filledCount = 1;
  }

  const renderStars = (filledCount: number) => {
    const stars = [];
    for (let i = 0; i < 4; i++) {
      const filled = i < filledCount;
      stars.push(
        <Icon
          key={i}
          size={verticalScale(20)}
          name='star-fill'
          color={filled ? theme.colors.accented : theme.colors.cardQuizBorder}
        />,
      );
    }
    return stars;
  };

  return (
    <Container>
      <BoxRow>
        <BoxColumnLeft>
          <QuizName>{title}</QuizName>
          <DateTime>{dateTime}</DateTime>
        </BoxColumnLeft>
        <BoxColumnCenter>
          <Percentage>{percentage}</Percentage>
          <TextPercentage>de acertos</TextPercentage>
          <BoxStar>{renderStars(filledCount)}</BoxStar>
        </BoxColumnCenter>
      </BoxRow>
    </Container>
  );
}
