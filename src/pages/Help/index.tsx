import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GradientContainer} from '@components/GradientContainer';
import {Header} from '@components/Header';
import {Container, Subtitle, Title} from './styles';
import {ExpandableItem} from '@components/ExpandableItem';
import {verticalScale} from 'react-native-size-matters';

export function Help() {
  const navigation = useNavigation();
  return (
    <GradientContainer>
      <Container>
        <Header title='Ajuda' onPress={() => navigation.goBack()} />
        <Title>Perguntas frequentes</Title>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: verticalScale(50),
          }}>
          <Subtitle>
            Tem alguma dúvida? Confira se as respostas abaixo podem te ajudar.
          </Subtitle>
          <ExpandableItem
            title='Qual é o propósito deste quiz?'
            content='O objetivo principal deste quiz é promover o aprendizado, ao mesmo tempo em que divulga a doutrina espírita, incentivando a autoavaliação, interação e entretenimento.'
          />
          <ExpandableItem
            title='Este é um jogo individual ou múltiplos jogadores?'
            content='Este é um jogo individual, mas os objetivos futuros incluem torná-lo multiplayer.'
          />
          <ExpandableItem
            title='É necessário se cadastrar para jogar?'
            content='Não, apenas é necessário informar o nome do jogador.'
          />
          <ExpandableItem
            title='Como jogar este quiz?'
            content='Para jogar, o usuário deve seguir os passos simples de escolher uma categoria, depois uma subcategoria e, por fim, selecionar o quiz desejado.'
          />
          <ExpandableItem
            title='Quem desenvolveu este aplicativo?'
            content='O aplicativo foi desenvolvido por Kleiser Nairobi, um desenvolvedor mobile e espírita.'
          />
          <ExpandableItem
            title='Posso contribuir financeiramente com o aplicativo?'
            content='Sim, você pode contribuir financeiramente com o aplicativo para ajudar a cobrir as despesas com as lojas Google e Apple.'
          />
          <ExpandableItem
            title='Como posso contribuir financeiramente com o aplicativo?'
            content='Para contribuir financeiramente com o aplicativo, entre em contato com o desenvolvedor pelo e-mail kleiser.nairobi@gmail.com.'
          />
          <ExpandableItem
            title='Posso contribuir com novas questões para o quiz?'
            content='Sim, você pode contribuir com novas questões para o quiz. Envie um e-mail para kleiser.nairobi@gmail.com informando a categoria, subcategoria e as questões que deseja adicionar. Lembre-se de incluir duas a quatro alternativas, além da alternativa correta, e seu nome para os devidos créditos. As perguntas serão analisadas e, se aprovadas, estarão disponíveis em uma nova versão.'
          />
          <ExpandableItem
            title='Quais são os objetivos futuros deste quiz?'
            content='Os objetivos futuros incluem tornar o jogo multiplayer, permitir rankings entre os jogadores, dar aos usuários a capacidade de cadastrar novos quizzes e oferecer suporte para outros idiomas.'
          />
          <ExpandableItem
            title='Em quais plataformas este aplicativo estará disponível?'
            content='Inicialmente, o aplicativo estará disponível na Google Play.'
          />
          <ExpandableItem
            title='Haverá uma versão para a Apple?'
            content='Sim, uma versão para a Apple está planejada, dependendo do alcance dos objetivos financeiros.'
          />
        </ScrollView>
      </Container>
    </GradientContainer>
  );
}
