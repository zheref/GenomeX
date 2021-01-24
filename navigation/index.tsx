import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import AuthReducer, {initialState as authInitialState} from '../stores/auth/reducer';
import {fetchIdentityString} from '../repositories/auth';
import {restoreIdentity, signIn, signOut} from '../stores/auth/creators';
import IdentifyYourself from '../screens/IdentifyYourself';

const AuthContext = React.createContext({});

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [state, dispatch] = React.useReducer(AuthReducer, authInitialState);

  React.useEffect(() => {
    const bootstrapAuth = async () => {
      try {
        const identity = await fetchIdentityString();
        if (identity) {
          dispatch(restoreIdentity(identity));
        }
      } catch (e) {
        // TODO: Display user friendly error
        console.error(e);
      }
    };

    bootstrapAuth().then(() => {});
  }, []);

  const authContext = React.useMemo(() => ({
    signIn: (torreHandle: string) => dispatch(signIn(torreHandle)),
    signOut: () => dispatch(signOut()),
  }), []);

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.userIdentity == null ? (
            <Stack.Screen name="Identity" component={IdentifyYourself} />
        ) : (
          <>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}
