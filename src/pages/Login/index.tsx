import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import BottomSheet from '@gorhom/bottom-sheet';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scale, verticalScale} from 'react-native-size-matters';
import auth from '@react-native-firebase/auth';
import {GradientContainer} from '@components/GradientContainer';
import {ButtonAction} from '@components/ButtonAction';
import {Input} from '@components/Input';
import {BottomSheetMessage} from '@components/BottomSheetMessage';
import {MessageType} from '@models/Utils';
import {getErrorFirebase} from '@utils/Firebase';

import {
  Button,
  ColumnLogo,
  Container,
  ContainerHeader,
  Content,
  Header,
  Logo,
  SpaceButton,
  SubtitleHeader,
  TitleLogo,
  LinkLogin,
  ContainerModal,
  BoxLine,
  Line,
} from './styles';
import {Loading} from '@components/Loading';
import Icon from 'react-native-remix-icon';

export function Login() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const [errorAuth, setErrorAuth] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({email: '', password: ''});
  const [inputs, setInputs] = useState({email: '', password: ''});

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [1, '36%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    setBottomSheetOpen(index === 1);
  }, []);

  function handleBottomSheetPressPrimary() {
    setModalError(false);
    setModalPassword(false);
    setBottomSheetOpen(false);
    bottomSheetRef.current?.close();
  }

  function validate() {
    let valid = true;
    Keyboard.dismiss();
    setLoading(true);
    if (!inputs.email) {
      handleError('Por favor, informe o seu e-mail.', 'email');
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Por favor, informe um e-mail válido.', 'email');
      valid = false;
    }
    if (!inputs.password) {
      handleError('Por favor, informe uma senha.', 'password');
      valid = false;
    } else if (inputs.password.length < 6) {
      handleError('A senha deve ter no mínimo 6 caracteres.', 'password');
      valid = false;
    }
    if (valid) {
      login();
    }
  }

  function handleRegister() {
    navigation.navigate('register');
  }

  function handleRecoverPassword() {
    let valid = true;

    if (!inputs.email) {
      handleError('Por favor, informe o seu e-mail.', 'email');
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Por favor, informe um e-mail válido.', 'email');
      valid = false;
    }

    if (valid) {
      setLoading(true);
      auth()
        .sendPasswordResetEmail(inputs.email.toLowerCase())
        .then(() => {
          setLoading(false);
          setModalPassword(true);
          setBottomSheetOpen(true);
          bottomSheetRef.current?.expand();
        })
        .catch(error => {
          setLoading(false);
          setModalError(true);
          setBottomSheetOpen(true);
          setErrorAuth(getErrorFirebase(error.code));
          bottomSheetRef.current?.expand();
        });
    }
  }

  function handleOnChange(text: string, input: string) {
    setInputs(prevState => ({...prevState, [input]: text}));
  }

  function handleError(errorMessage: string | null, input: string) {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  }

  function login() {
    auth()
      .signInWithEmailAndPassword(inputs.email.toLowerCase(), inputs.password)
      .then(() => setLoading(false))
      .catch(error => {
        setLoading(false);
        setModalError(true);
        setBottomSheetOpen(true);
        setErrorAuth(getErrorFirebase(error.code));
        bottomSheetRef.current?.expand();
      });
  }

  // if (loading) {
  //   <Loading />;
  // }

  return (
    <Container>
      <GradientContainer>
        <Header>
          <ColumnLogo>
            <Logo source={require('@assets/images/Kardec/Kardec.png')} />
            <TitleLogo>Quiz Espírita</TitleLogo>
          </ColumnLogo>
        </Header>
        <Content>
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            showsVerticalScrollIndicator={false}
            extraHeight={verticalScale(120)}
            style={{elevation: 0, shadowOpacity: 0}}>
            <ContainerHeader>
              <SubtitleHeader>
                Informe os dados abaixo e autentique-se para testar seus
                conhecimentos em Doutrina Espírita.
              </SubtitleHeader>
            </ContainerHeader>
            <Input
              label='E-Mail'
              placeholder='nome@email.com'
              iconName='mail-line'
              value={inputs.email}
              error={errors.email}
              onFocus={() => handleError(null, 'email')}
              onChangeText={text => handleOnChange(text, 'email')}
              autoCorrect={false}
              keyboardType='email-address'
            />
            <Input
              label='Senha'
              placeholder='123456'
              iconName='lock-password-line'
              value={inputs.password}
              error={errors.password}
              onFocus={() => handleError(null, 'password')}
              onChangeText={text => handleOnChange(text, 'password')}
              autoCorrect={false}
              password={true}
            />
            <SpaceButton>
              <ButtonAction
                disabled={false}
                title='Entrar'
                onPress={validate}
              />
            </SpaceButton>
            <BoxLine>
              <Button onPress={handleRecoverPassword}>
                <Line>
                  <Icon
                    name='lock-unlock-fill'
                    color={theme.colors.accented}
                    size={scale(20)}
                  />
                  <LinkLogin>Recuperar senha</LinkLogin>
                </Line>
              </Button>
              <Button onPress={handleRegister}>
                <Line>
                  <Icon
                    name='account-box-fill'
                    color={theme.colors.accented}
                    size={scale(20)}
                  />
                  <LinkLogin>Criar minha conta</LinkLogin>
                </Line>
              </Button>
            </BoxLine>
          </KeyboardAwareScrollView>
        </Content>
        {loading && <Loading />}
        {bottomSheetOpen && <ContainerModal />}
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
          {modalError && (
            <BottomSheetMessage
              type={MessageType.error}
              title='Houve um problema'
              subtitle={errorAuth}
              titleButtonPrimary='OK'
              onPressPrimary={handleBottomSheetPressPrimary}
            />
          )}
          {modalPassword && (
            <BottomSheetMessage
              type={MessageType.success}
              title='Redefinição de Senha'
              subtitle='Verifique seu e-mail para redefinir sua senha com o link que enviamos.'
              titleButtonPrimary='OK'
              onPressPrimary={handleBottomSheetPressPrimary}
            />
          )}
        </BottomSheet>
      </GradientContainer>
    </Container>
  );
}
