import React from 'react';
import {ButtonQuiz} from '@components/ButtonQuiz';
import {Container} from './styles';

type QuestionProps = {
  title: string;
  alternatives: string[];
};

type QuestionType = {
  question: QuestionProps;
  success: boolean;
  alternativeSelected?: number | null;
  setAlternativeSelected?: (value: number) => void;
};

export function Question({
  question,
  success,
  alternativeSelected,
  setAlternativeSelected,
}: QuestionType) {
  return (
    <Container>
      {question.alternatives.map((alternative, index) => (
        <ButtonQuiz
          key={index}
          title={alternative}
          checked={alternativeSelected === index}
          success={success}
          disabled={alternativeSelected != null}
          onPress={() =>
            setAlternativeSelected && setAlternativeSelected(index)
          }
        />
      ))}
    </Container>
  );
}
