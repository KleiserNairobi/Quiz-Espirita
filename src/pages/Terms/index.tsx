import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '@components/Header';
import {GradientContainer} from '@components/GradientContainer';
import {
  Container,
  ContainerItem,
  ContainerItem2,
  Description,
  Item,
  Row,
  Subitem,
  Subtitle,
  Title,
  Update,
} from './styles';

export function Terms() {
  const navigation = useNavigation();
  return (
    <GradientContainer>
      <Container>
        <Header title='Termo' onPress={() => navigation.goBack()} />
        <Title>Termo de uso</Title>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Subtitle>
            Ao utilizar o aplicativo Quiz Espírita, você concorda com os termos
            abaixo.
          </Subtitle>
          <Subtitle>
            Se você não concordar, por favor, não continue a usar o aplicativo.
          </Subtitle>

          <Item>1. Uso do aplicativo</Item>
          <ContainerItem>
            <Row>
              <Subitem>1.1</Subitem>
              <Description>
                O aplicativo “Quiz Espírita” destina-se a fins recreativos e
                educativos, oferecendo um quiz com temática espírita. Não nos
                responsabilizamos por qualquer uso indevido ou interpretação
                incorreta das informações contidas no aplicativo.
              </Description>
            </Row>
            <Row>
              <Subitem>1.2</Subitem>
              <Description>
                Você concorda em utilizar o aplicativo de acordo com todas as
                leis e regulamentos locais, nacionais e internacionais
                aplicáveis.
              </Description>
            </Row>
          </ContainerItem>

          <Item>2. Propriedade intelectual</Item>
          <ContainerItem>
            <Row>
              <Subitem>2.1</Subitem>
              <Description>
                Todos os direitos de propriedade intelectual relacionados ao
                aplicativo "Quiz Espírita", incluindo mas não se limitando a
                design, gráficos, texto, imagens e código, são de propriedade
                exclusiva de Kleiser Nairobi de Oliveira.
              </Description>
            </Row>
            <Row>
              <Subitem>2.2</Subitem>
              <Description>
                Você não possui o direito de reproduzir, modificar, distribuir
                ou criar obras derivadas com base no aplicativo "Quiz Espírita"
                sem o consentimento expresso por escrito de Kleiser Nairobi de
                Oliveira.
              </Description>
            </Row>
          </ContainerItem>
          <Item>3. Conteúdo do usuário</Item>
          <ContainerItem>
            <Row>
              <Subitem>3.1</Subitem>
              <Description>
                O aplicativo "Quiz Espírita" pode permitir que você insira um
                nome na tela de identificação para personalizar a experiência do
                usuário. No entanto, você concorda em não inserir nomes ou
                qualquer conteúdo que seja ofensivo, difamatório, ilegal ou que
                viole os direitos de terceiros.
              </Description>
            </Row>
            <Row>
              <Subitem>3.2</Subitem>
              <Description>
                Você mantém a propriedade do conteúdo que você insere no
                aplicativo, mas concede a Kleiser Nairobi de Oliveira uma
                licença não exclusiva, global, irrevogável e sublicenciável para
                usar, reproduzir, modificar e exibir esse conteúdo no
                aplicativo.
              </Description>
            </Row>
          </ContainerItem>

          <Item>4. Limitação de responsabilidade</Item>
          <ContainerItem>
            <Row>
              <Subitem>4.1</Subitem>
              <Description>
                O aplicativo "Quiz Espírita" é fornecido "no estado em que se
                encontra", sem garantias de qualquer tipo, expressas ou
                implícitas. Não garantimos a precisão, confiabilidade ou
                disponibilidade contínua do aplicativo.
              </Description>
            </Row>
            <Row>
              <Subitem>4.2</Subitem>
              <Description>
                Kleiser Nairobi de Oliveira não será responsável por quaisquer
                danos diretos, indiretos, incidentais, especiais ou
                consequenciais decorrentes do uso ou impossibilidade de uso do
                aplicativo "Quiz Espírita".
              </Description>
            </Row>
          </ContainerItem>
          <Item>5. Alterações nos termos de uso</Item>
          <ContainerItem2>
            <Description>
              Reservamo-nos o direito de modificar ou atualizar estes Termos de
              Uso a qualquer momento. Quaisquer alterações significativas serão
              notificadas através do aplicativo ou em nosso site.
            </Description>
          </ContainerItem2>
          <Item>6. Contato</Item>
          <ContainerItem2>
            <Description>
              Se você tiver alguma dúvida ou preocupação relacionada a estes
              Termos de Uso ou ao uso do aplicativo "Quiz Espírita", por favor,
              entre em contato conosco pelo seguinte endereço de e-mail:
              kleiser.nairobi@gmail.com
            </Description>
          </ContainerItem2>
          <Update>Este Termo de Uso foi atualizado em 28/08/2023.</Update>
        </ScrollView>
      </Container>
    </GradientContainer>
  );
}
