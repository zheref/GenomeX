import {Ionicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {BottomTabBarButtonProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import GenomeScreen from '../screens/GenomeScreen';
import JobsScreen from '../screens/JobsScreen';
import { BottomTabParamList, GenomeParamList, JobsParamList } from '../types';
import {
  GestureResponderEvent,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Row from '../components/Row';
import Center from '../components/Center';
import Column from '../components/Column';

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
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Genome"
        component={GenomeNavigator}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => (
              <CustomTabBarItem onPress={props.onPress} backgroundColor="#ffffff">
                <MaterialCommunityIcons name="face-profile" color="black" size={30} />
              </CustomTabBarItem>
          ),
        }}
      />
      <BottomTab.Screen
        name="Jobs"
        component={JobsNavigator}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => (
              <CustomTabBarItem onPress={props.onPress} backgroundColor="#000000">
                <MaterialIcons name="work" size={30} color="white" />
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
        component={GenomeScreen}
        options={{ headerTitle: 'Your Genome' }}
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
        options={{ headerTitle: 'Jobs' }}
      />
    </JobsStack.Navigator>
  );
}
