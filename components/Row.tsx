import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface RowProps {
  children: React.ReactElement;
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default function Row(props: RowProps) {
  return (
      <View style={{...styles.row, ...props.style}}>
        {props.children}
      </View>
  );
}
