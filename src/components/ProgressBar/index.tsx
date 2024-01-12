import React from 'react';
import {
  Bar,
  Container,
  Progress,
  QuestionCurrent,
  QuestionTitle,
  QuestionTotal,
  QuestionBox,
} from './styles';

type ProgressBarType = {
  current: number;
  total: number;
};

export function ProgressBar({current, total}: ProgressBarType) {
  return (
    <Container>
      <QuestionBox>
        <QuestionTitle>Questão</QuestionTitle>
        <QuestionCurrent>{current}</QuestionCurrent>
        <QuestionTotal>/</QuestionTotal>
        <QuestionTotal>{total}</QuestionTotal>
      </QuestionBox>
      <Bar>
        <Progress current={current} total={total} />
      </Bar>
    </Container>
  );
}
