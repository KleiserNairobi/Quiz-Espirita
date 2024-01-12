import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {Header} from '@components/Header';
import {ButtonAction} from '@components/ButtonAction';
import {GradientContainer} from '@components/GradientContainer';

import {
  Container,
  Title,
  Subtitle,
  TitlePath,
  DescriptionPath,
  BoxLoading,
  TitleLoading,
  Loading,
  Line,
  BoxPath,
} from './styles';
import {Quizes} from '@quizes/Quizes';
import Icon from 'react-native-remix-icon';
import {verticalScale} from 'react-native-size-matters';
import {View} from 'react-native';

export function Export() {
  const navigation = useNavigation();
  const [disable, setDisable] = useState(false);
  const [processing, setProcessing] = useState(false);

  async function exportFirestore() {
    setProcessing(true);
    setDisable(true);
    try {
      const quizCollection = firestore().collection('quizes');
      for (const quiz of Quizes) {
        await quizCollection.doc(quiz.id).set(quiz);
      }
      setProcessing(false);
      setDisable(false);
      console.log('Dados inseridos com sucesso no Firestore');
    } catch (error) {
      setProcessing(false);
      setDisable(false);
      console.error('Erro ao inserir dados no Firestore:', error);
    }
  }

  return (
    <GradientContainer>
      <Container>
        <Header onPress={() => navigation.goBack()} title='Gestão de Dados' />
        <Title>Exportação para Firebase</Title>
        <Subtitle>
          Utilize essa rotina para exportar as perguntas e respostas dos
          contribuintes diretamente para o Firebase.
        </Subtitle>
        <BoxPath>
          <Line>
            <Icon name='database-2-line' size={24} />
            <TitlePath>Dados</TitlePath>
          </Line>
          <DescriptionPath>./src/quizes/Quizes.tsx</DescriptionPath>
        </BoxPath>
        {processing && (
          <BoxLoading>
            <Loading />
            <TitleLoading>Aguarde, processando.</TitleLoading>
          </BoxLoading>
        )}
        <ButtonAction
          disabled={disable}
          title='Exportar'
          onPress={exportFirestore}
        />
      </Container>
    </GradientContainer>
  );
}
