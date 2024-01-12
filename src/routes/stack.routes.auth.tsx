import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Categories} from '@pages/Categories';
import {Subcategories} from '@pages/Subcategories';
import {Quizes} from '@pages/Quizes';
import {Finish} from '@pages/Finish';
import {Progress} from '@pages/Progress';
import {Menu} from '@pages/Menu';
import {Help} from '@pages/Help';
import {Terms} from '@pages/Terms';
import {Privacy} from '@pages/Privacy';
import {Contact} from '@pages/Contact';
import {Export} from '@pages/Export';
import {CreateQuiz} from '@pages/Create';

const {Navigator, Screen} = createNativeStackNavigator();

export function StackRoutesAuth() {
  return (
    <Navigator
      initialRouteName={'categories'}
      screenOptions={{headerShown: false}}>
      <Screen name='categories' component={Categories} />
      <Screen name='subcategories' component={Subcategories} />
      <Screen
        name='quizes'
        component={Quizes}
        options={{gestureEnabled: false}}
      />
      <Screen
        name='finish'
        component={Finish}
        options={{gestureEnabled: false}}
      />
      <Screen name='progress' component={Progress} />
      <Screen name='menu' component={Menu} />
      <Screen name='help' component={Help} />
      <Screen name='terms' component={Terms} />
      <Screen name='privacy' component={Privacy} />
      <Screen name='contact' component={Contact} />
      <Screen name='export' component={Export} />
      <Screen name='create' component={CreateQuiz} />
    </Navigator>
  );
}
