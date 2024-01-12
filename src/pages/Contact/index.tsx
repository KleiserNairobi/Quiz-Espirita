import React, {useRef, useMemo, useState, useCallback} from 'react';
import email from 'react-native-email';
import {ButtonBox, Container, Label, Title} from './styles';
import {GradientContainer} from '@components/GradientContainer';
import {Header} from '@components/Header';
import {useNavigation} from '@react-navigation/native';
import {Input} from '@components/Input';
import {ButtonAction} from '@components/ButtonAction';
import BottomSheet from '@gorhom/bottom-sheet';
import {scale, verticalScale} from 'react-native-size-matters';
import {BottomSheetMessage} from '@components/BottomSheetMessage';
import {useTheme} from 'styled-components/native';

export function Contact() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [1, '36%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    setBottomSheetOpen(index === 1);
  }, []);

  function sendEmail() {
    const subject = 'Contato Quiz Espírita';
    const body = `Nome: ${name}\nE-mail: ${emailAddress}\nMensagem: ${message}`;
    const to = ['kleiser.nairobi@gmail.com'];
    email(to, {subject: subject, body: body, checkCanOpen: false})
      .then(() => {
        setName('');
        setEmailAddress('');
        setMessage('');
      })
      .catch(error => {
        console.error('Configure um cliente de e-mail');
      });
  }

  return (
    <GradientContainer>
      <Container>
        <Header onPress={() => navigation.goBack()} title='Contato' />
        <Title>Contate-nos</Title>
        <Label>Nome</Label>
        <Input
          multiline={false}
          autoCorrect={false}
          value={name}
          placeholder='Seu nome completo'
          onChangeText={text => setName(text)}
        />
        <Label>E-Mail</Label>
        <Input
          multiline={false}
          autoCorrect={false}
          value={emailAddress}
          placeholder='Seu endereço de e-mail'
          onChangeText={text => setEmailAddress(text)}
          keyboardType='email-address'
        />
        <Label>Mensagem</Label>
        <Input
          multiline={true}
          autoCorrect={false}
          value={message}
          numberOfLines={4}
          placeholder='Escreva aqui...'
          onChangeText={text => setMessage(text)}
        />
        <ButtonBox>
          <ButtonAction disabled={false} title='Enviar' onPress={sendEmail} />
        </ButtonBox>
      </Container>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{backgroundColor: theme.colors.backGradientStart}}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.secondary,
          width: scale(80),
          height: verticalScale(8),
        }}
        onChange={handleSheetChanges}>
        {/* {next && (
          <BottomSheetMessage
            title='Deseja realmente pular a questão?'
            subtitle='Questões não respondidas serão contabilizadas como erros na sua pontuação final.'
            onPressPrimary={handleNextQuestion}
            onPressSecondary={handleBottomSheetClose}
          />
        )} */}
      </BottomSheet>
    </GradientContainer>
  );
}
