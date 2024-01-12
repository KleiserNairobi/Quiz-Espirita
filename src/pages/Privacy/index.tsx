import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GradientContainer} from '@components/GradientContainer';
import {Header} from '@components/Header';
import {
  Container,
  ContainerItem,
  Description,
  Item,
  Row,
  Subtitle,
  Title,
  Update,
} from './styles';

export function Privacy() {
  const navigation = useNavigation();
  return (
    <GradientContainer>
      <Container>
        <Header title='Privacidade' onPress={() => navigation.goBack()} />
        <Title>Política de privacidade</Title>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Subtitle>
            Esta Política de Privacidade descreve como o aplicativo Quiz
            Espírita coleta, utiliza e protege as informações pessoais dos
            usuários. Ao utilizar o aplicativo, você concorda com os termos
            desta política.
          </Subtitle>
          <Subtitle>
            Se você não concordar, por favor, não continue a usar o aplicativo.
          </Subtitle>
          <Item>1. Coleta de informações</Item>
          <ContainerItem>
            <Description>
              O aplicativo “Quiz Espírita” não coleta nenhum dado pessoal
              identificável dos usuários. Embora haja uma tela de identificação
              onde você pode inserir um nome, saiba que essa informação é
              estritamente opcional e não será utilizada para rastrear,
              identificar ou armazenar informações sobre você.
            </Description>
          </ContainerItem>
          <Item>2. Uso das Informações</Item>
          <ContainerItem>
            <Description>
              O aplicativo "Quiz Espírita" não utiliza as informações inseridas
              na tela de identificação para nenhum propósito. O nome fornecido
              pelo usuário não será associado a nenhuma atividade ou ação dentro
              do aplicativo. Ele serve apenas como uma forma de personalizar a
              experiência do usuário durante a utilização do quiz.
            </Description>
          </ContainerItem>
          <Item>3. Compartilhamento de Informações</Item>
          <ContainerItem>
            <Description>
              O aplicativo "Quiz Espírita" não compartilha nenhuma informação
              pessoal ou qualquer outro dado inserido pelos usuários com
              terceiros, incluindo empresas, organizações ou indivíduos.
            </Description>
          </ContainerItem>
          <Item>4. Cookies e Tecnologias Similares</Item>
          <ContainerItem>
            <Description>
              O aplicativo "Quiz Espírita" não utiliza cookies, tags de pixel,
              ou qualquer outra tecnologia de rastreamento para coletar
              informações dos usuários.
            </Description>
          </ContainerItem>
          <Item>5. Segurança</Item>
          <ContainerItem>
            <Description>
              A segurança das informações dos usuários é importante para nós.
              Embora o aplicativo "Quiz Espírita" não colete informações
              pessoais, tomamos medidas razoáveis para proteger qualquer dado
              fornecido pelos usuários no aplicativo.
            </Description>
          </ContainerItem>
          <Item>6. Menores de Idade</Item>
          <ContainerItem>
            <Description>
              O aplicativo "Quiz Espírita" é destinado a todas as idades e não
              coleta nenhuma informação pessoal identificável, tornando-o seguro
              para uso por menores de idade.
            </Description>
          </ContainerItem>
          <Item>7. Alterações na Política de Privacidade</Item>
          <ContainerItem>
            <Description>
              Reservamo-nos o direito de atualizar ou modificar esta Política de
              Privacidade a qualquer momento. Quaisquer alterações
              significativas serão notificadas através de uma atualização no
              aplicativo ou em nosso site.
            </Description>
          </ContainerItem>
          <Item>8. Contato</Item>
          <ContainerItem>
            <Description>
              Se você tiver alguma dúvida ou preocupação relacionada a esta
              Política de Privacidade ou ao uso do aplicativo "Quiz Espírita",
              por favor, entre em contato conosco pelo seguinte endereço de
              e-mail: kleiser.nairobi@gmail.com
            </Description>
          </ContainerItem>
          <Update>
            Esta Política de Privacidade foi atualizada em 28/08/2023.
          </Update>
        </ScrollView>
      </Container>
    </GradientContainer>
  );
}
