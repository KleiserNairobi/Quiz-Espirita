import React, {useEffect, useState} from 'react';
import {GradientContainer} from '@components/GradientContainer';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ButtonAction} from '@components/ButtonAction';

import {
  BoxColumn,
  BoxRow,
  Category,
  Container,
  Message,
  Points,
  StarsAndBooks,
  Subcategory,
  Title,
  TitlePoints,
} from './styles';

import FourStars from '@assets/images/Stars/FourStars.png';
import ThreeStars from '@assets/images/Stars/ThreeStars.png';
import TwoStars from '@assets/images/Stars/TwoStars.png';
import OneStar from '@assets/images/Stars/OneStar.png';

type RouteParams = {
  titleCategory: string;
  titleSubcategory: string;
  points: number;
  totalQuestions: number;
  percentage: number;
  level: string;
};

export function Finish() {
  const route = useRoute();
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [pathImage, setPathImage] = useState<any>(null);
  const [message, setMessage] = useState('');
  const {titleCategory, titleSubcategory, points, totalQuestions, percentage} =
    route.params as RouteParams;

  function getPerformanceMessage(percentage: number): any {
    if (percentage >= 90) {
      return {
        image: FourStars,
        title: 'Parabéns, querido estudante!',
        message:
          'Seu desempenho foi verdadeiramente notável, refletindo o brilho da luz do conhecimento. Continue aprofundando seus estudos, pois a jornada do entendimento espiritual é infinita e recompensadora.',
      };
    } else if (percentage >= 70) {
      return {
        image: ThreeStars,
        title: 'Muito bem, caro amigo do conhecimento espiritual!',
        message:
          'Seu desempenho foi admirável, demonstrando dedicação e empenho. Continue seguindo adiante, pois cada passo no aprendizado espiritual nos aproxima da verdade.',
      };
    } else if (percentage >= 50) {
      return {
        image: TwoStars,
        title: 'Seu esforço é louvável, nobre buscador da verdade!',
        message:
          'Seu desempenho foi razoável, e como diria, "Perseverança é a chave". Continue estudando e refletindo, pois a jornada espiritual é trilhada com paciência e determinação.',
      };
    } else {
      return {
        image: OneStar,
        title: 'Não se deixe abater, querido aprendiz!',
        message:
          'O conhecimento espiritual é como um rio que flui constantemente. Seu desempenho pode não ter sido o desejado, mas lembre-se de que cada passo em direção à luz é valioso. Continue estudando e buscando a compreensão.',
      };
    }
  }

  useEffect(() => {
    const {title, image, message} = getPerformanceMessage(percentage);
    setPathImage(image);
    setMessage(message);
    setTitle(title);
  }, []);

  return (
    <GradientContainer>
      <Container>
        {pathImage && <StarsAndBooks source={pathImage} />}
        <Subcategory>{titleSubcategory}</Subcategory>
        <Category>{titleCategory}</Category>
        <BoxRow>
          <BoxColumn>
            <Points>
              {points} / {totalQuestions}
            </Points>
            <TitlePoints>Questões corretas</TitlePoints>
          </BoxColumn>
          <BoxColumn>
            <Points>{percentage}%</Points>
            <TitlePoints>Percentual de acertos</TitlePoints>
          </BoxColumn>
        </BoxRow>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <ButtonAction
          disabled={false}
          title='voltar para tela inicial'
          onPress={() => navigation.navigate('categories')}
        />
      </Container>
    </GradientContainer>
  );
}
