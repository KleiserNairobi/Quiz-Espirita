import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ButtonNavigation} from '@components/ButtonNavigation';
import {Container} from './styles';

export function BottomNavigation() {
  const route = useRoute();
  const navigation = useNavigation();
  const screen = route.name;
  return (
    <Container>
      <ButtonNavigation
        active={screen === 'categories'}
        title='Início'
        iconName={screen === 'categories' ? 'home-3-fill' : 'home-3-line'}
        iconSize={30}
        onPress={() => navigation.navigate('categories')}
      />
      <ButtonNavigation
        active={screen === 'progress'}
        title='Progresso'
        iconName={screen === 'progress' ? 'trophy-fill' : 'trophy-line'}
        iconSize={30}
        onPress={() => navigation.navigate('progress')}
      />
      <ButtonNavigation
        active={screen === 'menu'}
        title='Mais'
        iconName={screen === 'menu' ? 'more-fill' : 'more-line'}
        iconSize={30}
        onPress={() => navigation.navigate('menu')}
      />
    </Container>
  );
}
