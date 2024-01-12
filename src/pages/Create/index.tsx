import React, {useState} from 'react';
import {View} from 'react-native';
import {Container, Subtitle, Title, ViewDropdown} from './styles';
import {GradientContainer} from '@components/GradientContainer';
import {Header} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
import {Input} from '@components/Input';
import {useTheme} from 'styled-components/native';
import {ButtonAction} from '@components/ButtonAction';
import {DropDown} from '@components/DropDown';
import {verticalScale} from 'react-native-size-matters';

interface Question {
  title: string;
  alternatives: string[];
  correct: number;
}

interface QuizData {
  id: string;
  idCategory: string;
  idSubcategory: string;
  questions: Question[];
}

const categories = [
  {label: 'Conceitos', value: 'CONCEITOS'},
  {label: 'Personagens', value: 'PERSONAGENS'},
  {label: 'Livros', value: 'LIVROS'},
  {label: 'Filmes', value: 'FILMES'},
  {label: 'Espíritos', value: 'ESPIRITOS'},
  {label: 'Histórias', value: 'HISTORIAS'},
];

export function CreateQuiz() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(categories);

  return (
    <GradientContainer>
      <Container>
        <Header title='Criar Quiz' onPress={() => navigation.goBack()} />
        <Title>Criar Quiz</Title>
        <Subtitle>
          Contribua com o Quiz Espírita! Crie perguntas e respostas exclusivas e
          compartilhe seu conhecimento com a comunidade.
        </Subtitle>

        <ViewDropdown>
          <DropDown
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder='Selecione a categoria'
          />
        </ViewDropdown>
        <Input
          label='Nome'
          placeholder='Nome do quiz'
          autoCorrect={false}
          keyboardType='default'
        />
        <Input
          label='Questões'
          placeholder='Número de questões'
          autoCorrect={false}
          keyboardType='numeric'
        />
        <View style={{marginTop: verticalScale(25)}}>
          <ButtonAction title='Avançar' onPress={() => {}} />
        </View>
      </Container>
    </GradientContainer>
  );
}
