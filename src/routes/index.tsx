import React, {useContext, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {StackRoutesAuth} from './stack.routes.auth';
import {StackRoutesUnauth} from './stack.routes.unauth';
import {AppContext} from '@providers/AppProvider';
import {ThemeType} from '@models/Utils';
import {Loading} from '@components/Loading';

export function Routes() {
  const {theme} = useContext(AppContext);
  const isDarkTheme = theme === ThemeType.dark;
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(loggedUser => {
      setUser(loggedUser);
      if (initializing) {
        setInitializing(false);
      }
    });
    return unsubscribe;
  }, []);

  if (initializing) {
    return <Loading background={false} />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        translucent
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor='transparent'
      />
      {user ? <StackRoutesAuth /> : <StackRoutesUnauth />}
    </NavigationContainer>
  );
}
