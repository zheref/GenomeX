import React from 'react';
import {ActivityIndicator, StyleSheet, ViewStyle} from 'react-native';
import Center from './Center';
import Color from '../constants/Color';

interface ActivityFragmentProps {
  style?: ViewStyle;
  animated: boolean;
  darkMode: boolean;
}

const styles = StyleSheet.create({
  container: {},
});

export default function ActivityFragment({darkMode, style, animated}: ActivityFragmentProps) {
  const backgroundStyles = {backgroundColor: darkMode ? Color.darkerBackground : Color.lightBackground};

  return (
      <Center style={{...styles.container, ...backgroundStyles, ...style}}>
        <ActivityIndicator animating={animated} color={darkMode ? Color.whiteForeground : Color.darkerForeground} size="large" />
      </Center>
  );
}
