import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ActivityFragment from '../components/ActivityFragment';
import Color from '../constants/Color';

interface LoadingScreenProps {
  darkMode: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default function LoadingScreen({darkMode}: LoadingScreenProps) {
  const backgroundStyles = {backgroundColor: darkMode ? Color.darkerBackground : Color.lightBackground};

  return (
      <View style={{...styles.container, ...backgroundStyles}}>
        <ActivityFragment animated={true} darkMode={darkMode} />
      </View>
  );
}