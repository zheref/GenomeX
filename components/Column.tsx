import React from 'react';
import {StyleSheet, View} from 'react-native';

interface ColumnProps {
  children: React.ReactElement;
  style?: object;
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
});

export default function Column(props: ColumnProps) {
  return (
      <View style={{...styles.column, ...props.style}}>
        {props.children}
      </View>
  );
}
