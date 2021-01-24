import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {BottomTabBarButtonProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import GenomeProfileScreen from '../screens/GenomeProfileScreen/GenomeScreen';
import JobsScreen from '../screens/JobsScreen';
import {BottomTabParamList, GenomeParamList, JobsParamList} from '../types';
import {
  GestureResponderEvent, TouchableOpacity,
} from 'react-native';
import Center from '../components/Center';
import Color from '../resources/colors';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

interface CustomTabBarItemProps {
  onPress?: (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent
  ) => void;
  backgroundColor: string;
  children: React.ReactElement;
}

function CustomTabBarItem(props: CustomTabBarItemProps): React.ReactElement {
  return (
      <TouchableOpacity onPress={props.onPress} style={{flex: 1}}>
        <Center style={{backgroundColor: props.backgroundColor, flex: 1}}>
          {props.children}
        </Center>
      </TouchableOpacity>
  )
}

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
      <BottomTab.Navigator
          initialRouteName="Genome"
          tabBarOptions={{
            activeTintColor: Colors[colorScheme].tint,
            tabStyle: {borderRadius: 20, borderWidth: 0},
            style: {borderTopWidth: 0, elevation: 0}
          }}>
        <BottomTab.Screen
            name="Genome"
            component={GenomeNavigator}
            options={{
              tabBarButton: (props: BottomTabBarButtonProps) => (
                  <CustomTabBarItem onPress={props.onPress} backgroundColor={Color.lightBackground}>
                    <MaterialCommunityIcons name="face-profile" color="black" size={30}/>
                  </CustomTabBarItem>
              ),
            }}
        />
        <BottomTab.Screen
            name="Jobs"
            component={JobsNavigator}
            options={{
              tabBarButton: (props: BottomTabBarButtonProps) => (
                  <CustomTabBarItem onPress={props.onPress} backgroundColor={Color.darkerBackground}>
                    <MaterialIcons name="work" size={28} color="white"/>
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