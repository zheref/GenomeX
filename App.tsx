import React from 'react';
import {connect, Provider} from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import Store from './stores';
import {RootState} from './stores/types';
import {ScreenStand} from './stores/meta/types';

interface AppBodyProps {
  screenStand: ScreenStand;
}

function appBody({screenStand}: AppBodyProps): React.ComponentElement<AppBodyProps, any> {
  return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style={screenStand === 'genome' ? 'dark' : 'light'} />
      </SafeAreaProvider>
  );
}

const reactive = connect((state: RootState) => ({
  screenStand: state.meta.screenStand,
}));

const AppBody = reactive(appBody);

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={Store}>
        <AppBody />
      </Provider>
    );
  }
}
