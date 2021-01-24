import React from 'react';
import {StyleSheet} from 'react-native';
import Row from './Row';
import Column from './Column';

interface CenterProps {
  children: React.ReactElement;
  style?: object;
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
});

export default function Center(props: CenterProps) {
  return (
      <Row style={{...styles.center, ...props.style}}>
        <Column style={styles.center}>{props.children}</Column>
      </Row>
  );
}
