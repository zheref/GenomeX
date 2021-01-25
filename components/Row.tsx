import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface RowProps {
  children: React.ReactElement;
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default function Row(props: RowProps) {
  return (
      <View style={{...styles.container, ...props.style}}>
        {props.children}
      </View>
  );
}
