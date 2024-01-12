import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppProvider} from '@providers/AppProvider';
import {Routes} from '@routes/index';

export function App() {
  SplashScreen.hide();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </GestureHandlerRootView>
  );
}
