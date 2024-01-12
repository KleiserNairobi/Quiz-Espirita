import React, {useEffect, useState} from 'react';
import {Dimensions, Keyboard, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GradientContainer} from '@components/GradientContainer';
import {ButtonAction} from '@components/ButtonAction';
import {Input} from '@components/Input';
import {saveString} from '@utils/Storage';
import {
  BoxButtonAction,
  Container,
  Title,
  ImageWelcome,
  BoxImage,
  Content,
} from './styles';

export function Welcome() {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const [name, setName] = useState('');
  const [isImageVisible, setImageVisible] = useState(true);

  function handleSubmit() {
    const success = saveString('user_name', name);
    if (success) {
      navigation.navigate('categories');
    }
  }

  function handleKeyboardDidShow() {
    setImageVisible(false);
  }

  function handleKeyboardDidHide() {
    setImageVisible(true);
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide,
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <GradientContainer>
      <Container>
        <Content>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            keyboardShouldPersistTaps='handled'>
            {isImageVisible && (
              <BoxImage
                imageWidth={100}
                imageHeight={(width * 0.6 * 452) / 312}>
                <ImageWelcome
                  source={require('@assets/images/Welcome/Welcome.png')}
                />
              </BoxImage>
            )}
            <Title>Como você se chama?</Title>
            <Input
              label=''
              error=''
              multiline={false}
              placeholder='Nome'
              value={name}
              onChangeText={text => {
                setName(text);
              }}
              onFocus={() => {}}
            />
            <BoxButtonAction>
              <ButtonAction
                title='começar a jornada'
                onPress={handleSubmit}
                disabled={name.length < 3}
              />
            </BoxButtonAction>
          </ScrollView>
        </Content>
      </Container>
    </GradientContainer>
  );
}
