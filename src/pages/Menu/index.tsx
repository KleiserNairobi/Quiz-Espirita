import React, {useContext, useState, useRef, useMemo, useCallback} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import Toggle from 'react-native-toggle-element';
import Icon from 'react-native-remix-icon';
import auth from '@react-native-firebase/auth';
import BottomSheet from '@gorhom/bottom-sheet';
import {scale, verticalScale} from 'react-native-size-matters';
import Share, {ShareSingleOptions, Social} from 'react-native-share';
import {Header} from '@components/Header';
import {GradientContainer} from '@components/GradientContainer';
import {BottomNavigation} from '@components/BottomNavigation';
import {MenuMore} from '@components/MenuMore';
import {BottomSheetMessage} from '@components/BottomSheetMessage';
import {AppContext} from '@providers/AppProvider';
import {AppInstaled, MessageType, ThemeType} from '@models/Utils';
import files from '@assets/images/Base64/FilesBase64';

import {
  Container,
  Row,
  RowTitle,
  BoxVersion,
  Version,
  Wrapper,
  BoxItems,
  ContainerModal,
  TitleModal,
  SubtitleModal,
  RowModal,
  ShareButton,
  ButtonPrimary,
  TitleButtonPrimary,
  ViewButton,
} from './styles';

const TITLE = 'Quiz Espírita';
const MESSAGE = `Que tal um desafio sobre espiritismo? \n\nTeste seus conhecimentos no Quiz Espírita. \nJogue agora e compartilhe com amigos para que eles também possam aprender e se divertir! \n\nE lembre-se, divulgar a doutrina espírita também é um ato de caridade.`;

export function Menu() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [onShare, setOnShare] = useState(false);
  const [onError, setOnError] = useState(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [error, setError] = useState('');

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [1, '36%'], []);

  const {
    theme: themeContext,
    toggleTheme,
    isSoundOn,
    toggleSound,
  } = useContext(AppContext);
  const isDarkTheme = themeContext === ThemeType.dark;

  const handleSheetChanges = useCallback((index: number) => {
    setBottomSheetOpen(index === 1);
  }, []);

  async function isAppInstalled(app: AppInstaled) {
    let packageName = '';
    switch (app) {
      case 'Facebook':
        packageName =
          Platform.OS === 'android' ? 'com.facebook.katana' : 'fb://';
        break;
      case 'Whatsapp':
        packageName =
          Platform.OS === 'android' ? 'com.whatsapp' : 'whatsapp://';
        break;
      case 'Twitter':
        packageName =
          Platform.OS === 'android' ? 'com.twitter.android' : 'twitter://';
        break;
      case 'Instagram':
        packageName =
          Platform.OS === 'android'
            ? 'com.instagram.android'
            : 'instagram://app';
        break;
      default:
        break;
    }
    try {
      const {isInstalled} = await Share.isPackageInstalled(packageName);
      return isInstalled;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function handleShareFacebook() {
    const shareOptions: ShareSingleOptions = {
      title: TITLE,
      message: MESSAGE,
      social: Social.Facebook,
      url: files.imgShareMedia,
    };
    try {
      const isInstalled = await isAppInstalled(AppInstaled.facebook);
      if (isInstalled) {
        await Share.shareSingle(shareOptions);
      } else {
        setOnShare(false);
        setOnError(true);
        setError(
          'Verifique se o Facebook está instalado e conceda permissão de compartilhamento.',
        );
      }
    } catch {
      setOnShare(false);
      setOnError(true);
      setError(
        'Verifique se o Facebook está instalado e conceda permissão de compartilhamento.',
      );
    }
  }

  async function handleShareWhatsapp() {
    const shareOptions: ShareSingleOptions = {
      title: TITLE,
      message: MESSAGE,
      social: Social.Whatsapp,
      url: files.imgShareMedia,
    };
    try {
      const isInstalled = await isAppInstalled(AppInstaled.whatsapp);
      if (isInstalled) {
        await Share.shareSingle(shareOptions);
      } else {
        setOnShare(false);
        setOnError(true);
        setError(
          'Verifique se o Whatsapp está instalado e conceda permissão de compartilhamento.',
        );
      }
    } catch {
      setOnShare(false);
      setOnError(true);
      setError(
        'Verifique se o Whatsapp está instalado e conceda permissão de compartilhamento.',
      );
    }
  }

  async function handleShareTwitter() {
    const shareOptions: ShareSingleOptions = {
      title: TITLE,
      message: MESSAGE,
      social: Social.Twitter,
      url: files.imgShareMedia,
    };
    try {
      const isInstalled = await isAppInstalled(AppInstaled.twitter);
      if (isInstalled) {
        await Share.shareSingle(shareOptions);
      } else {
        setOnShare(false);
        setOnError(true);
        setError(
          'Verifique se o Twitter está instalado e conceda permissão de compartilhamento.',
        );
      }
    } catch {
      setOnShare(false);
      setOnError(true);
      setError(
        'Verifique se o Twitter está instalado e conceda permissão de compartilhamento.',
      );
    }
  }

  async function handleShareInstagram() {
    const shareOptions: ShareSingleOptions = {
      title: TITLE,
      message: MESSAGE,
      social: Social.InstagramStories,
      filename: files.imgShareMedia,
      appId: 'xxxx',
    };
    try {
      const isInstalled = await isAppInstalled(AppInstaled.instagram);
      if (isInstalled) {
        await Share.shareSingle(shareOptions);
      } else {
        setOnShare(false);
        setOnError(true);
        setError(
          'Verifique se o Instagram está instalado e conceda permissão de compartilhamento.',
        );
      }
    } catch {
      setOnShare(false);
      setOnError(true);
      setError(
        'Verifique se o Instagram está instalado e conceda permissão de compartilhamento.',
      );
    }
  }

  async function handleShareEmail() {
    const shareOptions: ShareSingleOptions = {
      title: TITLE,
      message: MESSAGE,
      social: Social.Email,
      subject: 'Quiz Espírita',
      url: files.imgShareMedia,
    };
    try {
      await Share.shareSingle(shareOptions);
    } catch {
      setOnShare(false);
      setOnError(true);
      setError(
        'Verifique se um Email está instalado e conceda permissão de compartilhamento.',
      );
    }
  }

  function handleBottomSheetPrimary() {
    setOnShare(false);
    setBottomSheetOpen(false);
    bottomSheetRef.current?.close();
  }

  function handleShared() {
    setOnShare(true);
    setBottomSheetOpen(true);
    bottomSheetRef.current?.expand();
  }

  function handleShareError() {
    setOnError(false);
    setOnShare(true);
  }

  return (
    <GradientContainer>
      <Container>
        <Header onPress={() => navigation.goBack()} title='Mais opções' />
        <Wrapper>
          <MenuMore
            iconName='mail-send-line'
            title='Contato'
            onPress={() => navigation.navigate('contact')}
          />
          <MenuMore
            iconName='question-line'
            title='Ajuda'
            onPress={() => navigation.navigate('help')}
          />
          <MenuMore
            iconName='file-paper-2-line'
            title='Termo de uso'
            onPress={() => navigation.navigate('terms')}
          />
          <MenuMore
            iconName='ri-lock-2-line'
            title='Política de privacidade'
            onPress={() => navigation.navigate('privacy')}
          />
          <MenuMore
            iconName='ri-lock-2-line'
            title='Criar quiz'
            onPress={() => navigation.navigate('create')}
          />
          <MenuMore
            iconName='database-2-line'
            title='Gestão de Dados'
            onPress={() => navigation.navigate('export')}
          />
          {/* <MenuMore
            iconName='share-line'
            title='Compartilhar com amigos'
            onPress={handleShared}
          /> */}
          <MenuMore
            iconName='logout-box-r-line'
            title='Sair'
            onPress={() => auth().signOut()}
          />
        </Wrapper>
        <BoxItems>
          <Row>
            <RowTitle>Emitir som</RowTitle>
            <Toggle
              value={isSoundOn}
              onPress={toggleSound}
              trackBar={{
                width: verticalScale(72),
                height: verticalScale(32),
                borderWidth: 1,
                borderActiveColor: isDarkTheme
                  ? theme.colors.toggleBorderActive
                  : theme.colors.toggleBorderInActive,
                activeBackgroundColor: isDarkTheme
                  ? theme.colors.toggleActiveBackground
                  : theme.colors.toggleInActiveBackground,
                inActiveBackgroundColor: isDarkTheme
                  ? theme.colors.toggleActiveBackground
                  : theme.colors.toggleInActiveBackground,
                borderInActiveColor: isDarkTheme
                  ? theme.colors.toggleBorderActive
                  : theme.colors.toggleBorderInActive,
              }}
              thumbButton={{
                width: verticalScale(36),
                height: verticalScale(32),
                activeBackgroundColor: theme.colors.primary,
                inActiveBackgroundColor: theme.colors.primary,
              }}
              leftComponent={
                <Icon
                  name='volume-mute-line'
                  size={verticalScale(18)}
                  color={
                    !isDarkTheme && !isSoundOn
                      ? theme.colors.secondary
                      : !isDarkTheme && isSoundOn
                      ? theme.colors.primary
                      : isDarkTheme && !isSoundOn
                      ? theme.colors.terciary
                      : isDarkTheme && isSoundOn
                      ? theme.colors.titleNormal
                      : theme.colors.titleNormal
                  }
                />
              }
              rightComponent={
                <Icon
                  name='volume-down-line'
                  size={verticalScale(18)}
                  color={
                    !isDarkTheme && !isSoundOn
                      ? theme.colors.primary
                      : !isDarkTheme && isSoundOn
                      ? theme.colors.secondary
                      : isDarkTheme && !isSoundOn
                      ? theme.colors.titleNormal
                      : isDarkTheme && isSoundOn
                      ? theme.colors.terciary
                      : theme.colors.titleNormal
                  }
                />
              }
            />
          </Row>
          <Row>
            <RowTitle>Alterar tema</RowTitle>
            <Toggle
              value={isDarkTheme}
              onPress={toggleTheme}
              trackBar={{
                width: verticalScale(72),
                height: verticalScale(32),
                borderWidth: 1,
                borderActiveColor: isDarkTheme
                  ? theme.colors.toggleBorderActive
                  : theme.colors.toggleBorderInActive,
                activeBackgroundColor: isDarkTheme
                  ? theme.colors.toggleActiveBackground
                  : theme.colors.toggleInActiveBackground,
                inActiveBackgroundColor: isDarkTheme
                  ? theme.colors.toggleActiveBackground
                  : theme.colors.toggleInActiveBackground,
                borderInActiveColor: isDarkTheme
                  ? theme.colors.toggleBorderActive
                  : theme.colors.toggleBorderInActive,
              }}
              thumbButton={{
                width: verticalScale(36),
                height: verticalScale(32),
                activeBackgroundColor: theme.colors.primary,
                inActiveBackgroundColor: theme.colors.primary,
              }}
              leftComponent={
                <Icon
                  name='sun-line'
                  size={verticalScale(18)}
                  color={
                    isDarkTheme ? theme.colors.titleBold : theme.colors.terciary
                  }
                />
              }
              rightComponent={
                <Icon
                  name='contrast-2-fill'
                  size={verticalScale(18)}
                  color={
                    isDarkTheme ? theme.colors.terciary : theme.colors.primary
                  }
                />
              }
            />
          </Row>
        </BoxItems>
        <BoxVersion>
          <Version>Quiz Espírita</Version>
          <Version>Versão 1.0.0</Version>
        </BoxVersion>
      </Container>
      <BottomNavigation />

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
        {onShare && (
          <>
            <TitleModal>Compartilhar com amigos</TitleModal>
            <SubtitleModal>Selecione a mídia desejada.</SubtitleModal>
            <RowModal>
              <ShareButton onPress={handleShareFacebook}>
                <Icon
                  name='facebook-fill'
                  size={scale(26)}
                  color={theme.colors.buttonBackTitle}
                />
              </ShareButton>
              <ShareButton onPress={handleShareWhatsapp}>
                <Icon
                  name='whatsapp-fill'
                  size={scale(26)}
                  color={theme.colors.buttonBackTitle}
                />
              </ShareButton>
              <ShareButton onPress={handleShareTwitter}>
                <Icon
                  name='twitter-fill'
                  size={scale(26)}
                  color={theme.colors.buttonBackTitle}
                />
              </ShareButton>
              <ShareButton onPress={handleShareInstagram}>
                <Icon
                  name='instagram-fill'
                  size={scale(26)}
                  color={theme.colors.buttonBackTitle}
                />
              </ShareButton>
              <ShareButton onPress={handleShareEmail}>
                <Icon
                  name='mail-send-fill'
                  size={scale(26)}
                  color={theme.colors.buttonBackTitle}
                />
              </ShareButton>
            </RowModal>
            <ViewButton>
              <ButtonPrimary onPress={handleBottomSheetPrimary}>
                <TitleButtonPrimary>Fechar</TitleButtonPrimary>
              </ButtonPrimary>
            </ViewButton>
          </>
        )}
        {onError && (
          <BottomSheetMessage
            type={MessageType.error}
            title='Houve um problema'
            subtitle={error}
            titleButtonPrimary='OK'
            onPressPrimary={handleShareError}
          />
        )}
      </BottomSheet>
    </GradientContainer>
  );
}
