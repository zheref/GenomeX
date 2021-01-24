import React from 'react';
import {StyleSheet, View} from 'react-native';

interface RowProps {
  children: React.ReactElement;
  style?: object;
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
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
