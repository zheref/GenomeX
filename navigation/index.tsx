import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import IdentifyYourself from '../screens/IdentifyYourself';
import {RootState} from '../stores/types';
import {connect} from 'react-redux';
import {bootstrapThunk} from '../stores/auth/thunks';
import {Dispatch} from 'react';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator<RootStackParamList>();

const mapStateToProps = (state: RootState) => ({
  identity: state.auth.userIdentity,
  loading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatchBootstrap: () => { dispatch(bootstrapThunk()) },
});

const reactive = connect(mapStateToProps, mapDispatchToProps);

interface RootNavigatorProps {
  identity: string | null;
  loading: boolean;
  dispatchBootstrap: () => void;
}

function rootNavigator({identity, loading, dispatchBootstrap}: RootNavigatorProps): React.ComponentElement<RootNavigatorProps, any> {
  React.useEffect(() => {
    dispatchBootstrap();
  }, []);

  if (loading) {
    return <LoadingScreen darkMode={true} />;
  }

  const authenticatedStack: React.ReactElement = (
      <>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </>
  );

  const incognitoStack: React.ReactElement = (
      <Stack.Screen name="Identity" component={IdentifyYourself} />
  );

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {identity == null ? incognitoStack : authenticatedStack}
      </Stack.Navigator>
  );
}

const RootNavigator = reactive(rootNavigator);

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
      <NavigationContainer
          linking={LinkingConfiguration}
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
  );
}