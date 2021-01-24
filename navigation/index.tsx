import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {AppState, ColorSchemeName} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import AuthReducer, {initialState as authInitialState} from '../stores/auth/reducer';
import {fetchIdentityString} from '../repositories/auth';
import {restoreIdentity, signIn, signOut} from '../stores/auth/creators';
import IdentifyYourself from '../screens/IdentifyYourself';
import {RootState} from '../stores/auth/types';
import {connect} from 'react-redux';

const Stack = createStackNavigator<RootStackParamList>();

const mapStateToProps = (state: RootState) => ({
  identity: state.auth.userIdentity,
});

const listening = connect(mapStateToProps);

interface RootNavigatorProps {
  identity: string | null;
}

function rootNavigator({identity}: RootNavigatorProps): React.ComponentElement<RootNavigatorProps, any> {
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {identity == null ? (
            <Stack.Screen name="Identity" component={IdentifyYourself} />
        ) : (
            <>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
              <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            </>
        )}
      </Stack.Navigator>
  );
}

const RootNavigator = listening(rootNavigator);

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
      <NavigationContainer
          linking={LinkingConfiguration}
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
  );
}