import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {BottomTabBarButtonProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import GenomeProfileScreen from '../screens/GenomeProfileScreen/GenomeScreen';
import JobsScreen from '../screens/JobsScreen';
import {BottomTabParamList, GenomeParamList, JobsParamList} from '../types';
import {
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import Center from '../components/Center';
import Color from '../constants/Color';
import {Dispatch} from 'react';
import {connect} from 'react-redux';
import {ScreenStand} from '../stores/meta/types';
import {setTabStandAction} from '../stores/meta/creators';
import {RootState} from '../stores/types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

interface CustomTabBarItemProps {
  onPress?: (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent
  ) => void;
  children: React.ReactElement;
  selected: boolean;
  screen: ScreenStand;
}

const tabBarBackgroundForScreen = (screen: ScreenStand) => {
  switch (screen) {
    case 'jobs':
      return Color.darkerBackground;
    case 'genome':
      return Color.whiteBackground;
    case 'auth':
      return Color.darkerBackground;
  }
}

const tabItemBackgroundForScreen = (screen: ScreenStand, selected: Boolean) => {
  switch (screen) {
    case 'jobs':
      return selected ? Color.whiteBackground : Color.darkerBackground;
    case 'genome':
      return selected ? Color.darkerBackground : Color.whiteBackground;
    case 'auth':
      return Color.darkerBackground;
  }
}

const tabIconBackgroundForScreen = (screen: ScreenStand, selected: Boolean) => {
  switch (screen) {
    case 'jobs':
      return selected ? Color.darkerBackground : Color.whiteBackground;
    case 'genome':
      return selected ? Color.whiteBackground : Color.darkerBackground;
    case 'auth':
      return Color.darkerBackground;
  }
}

function CustomTabBarItem(props: CustomTabBarItemProps): React.ReactElement {
  return (
      <TouchableOpacity onPressIn={props.onPress} style={{flex: 1, borderRadius: 20}}>
        <Center style={{
          backgroundColor: tabItemBackgroundForScreen(props.screen, props.selected),
          flex: 1,
          borderRadius: 20,
        }}>
          {props.children}
        </Center>
      </TouchableOpacity>
  )
}

interface BottomTabNavigatorProps {
  dispatchSetTabStand: (tabStand: ScreenStand) => void;
  screenStand: ScreenStand;
}

function BottomTabNavigator({dispatchSetTabStand, screenStand}: BottomTabNavigatorProps) {
  return (
      <BottomTab.Navigator
          initialRouteName="Genome"
          tabBarOptions={{
            tabStyle: {borderRadius: 20, borderWidth: 0, backgroundColor: Color.darkerBackground},
            style: {
              borderTopWidth: 0,
              elevation: 0,
              borderRadius: 20,
              backgroundColor: tabBarBackgroundForScreen(screenStand),
              paddingHorizontal: 7,
              paddingTop: 5,
            }
          }}>
        <BottomTab.Screen
            name="Genome"
            component={GenomeNavigator}
            options={{
              tabBarButton: ({onPress}: BottomTabBarButtonProps) => (
                  <CustomTabBarItem onPress={(e) => {
                    if (onPress) {
                      onPress(e)
                    }
                    dispatchSetTabStand('genome');
                  }} selected={screenStand === 'genome'} screen={screenStand}>
                    <MaterialCommunityIcons name="face-profile"
                                            color={tabIconBackgroundForScreen(screenStand, screenStand === 'genome')}
                                            size={30}/>
                  </CustomTabBarItem>
              ),
            }}
        />
        <BottomTab.Screen
            name="Jobs"
            component={JobsNavigator}
            options={{
              tabBarButton: ({onPress}: BottomTabBarButtonProps) => (
                  <CustomTabBarItem onPress={(e) => {
                    if (onPress) {
                      onPress(e)
                    }
                    dispatchSetTabStand('jobs');
                  }} selected={screenStand === 'jobs'} screen={screenStand}>
                    <MaterialIcons name="work" size={28}
                                   color={tabIconBackgroundForScreen(screenStand, screenStand === 'jobs')}/>
                  </CustomTabBarItem>
              ),
            }}
        />
      </BottomTab.Navigator>
  );
}

const GenomeStack = createStackNavigator<GenomeParamList>();

function GenomeNavigator() {
  return (
      <GenomeStack.Navigator>
        <GenomeStack.Screen
            name="GenomeProfile"
            component={GenomeProfileScreen}
            options={{header: () => null}}
        />
      </GenomeStack.Navigator>
  );
}

const JobsStack = createStackNavigator<JobsParamList>();

function JobsNavigator() {
  return (
      <JobsStack.Navigator>
        <JobsStack.Screen
            name="JobSearch"
            component={JobsScreen}
            options={{
              headerTitle: 'Jobs',
              headerStyle: {backgroundColor: Color.darkerBackground, elevation: 0},
              headerTitleStyle: {color: Color.whiteForeground}
            }}
        />
      </JobsStack.Navigator>
  );
}

const reactive = connect((state: RootState) => ({
  screenStand: state.meta.screenStand,
}), (dispatch: Dispatch<any>) => ({
  dispatchSetTabStand: (tabStand: ScreenStand) => {
    dispatch(setTabStandAction(tabStand));
  }
}));

export default reactive(BottomTabNavigator);

