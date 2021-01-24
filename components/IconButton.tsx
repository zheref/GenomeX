import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Color from '../resources/colors';
import Font from '../resources/fonts';
import Center from './Center';

interface IconButtonProps {
  style?: object;
  onPress: () => void;
  children: React.ReactElement;
}

const styles = StyleSheet.create({
  own: {
    backgroundColor: Color.whiteBackground,
    height: 50,
    width: 50,
    paddingVertical: 14,
    borderRadius: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  caption: {
    fontSize: 18,
    fontFamily: Font.title,
  },
});

export default function IconButton(props: IconButtonProps): React.ComponentElement<IconButtonProps, any> {
  return (
      <TouchableOpacity style={{...styles.own, ...props.style}} onPress={props.onPress}>
        <Center>
          {props.children}
        </Center>
      </TouchableOpacity>
  );
}
