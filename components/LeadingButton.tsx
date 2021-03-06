import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Color from '../constants/Color';
import Font from '../constants/Fonts';

interface LeadingButtonProps {
  style?: object;
  caption: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  own: {
    backgroundColor: Color.whiteBackground,
    height: 50,
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

export default function LeadingButton(props: LeadingButtonProps): React.ComponentElement<LeadingButtonProps, any> {
  return (
      <TouchableOpacity style={{...styles.own, ...props.style}} onPress={props.onPress}>
        <Text style={styles.caption}>{props.caption}</Text>
      </TouchableOpacity>
  );
}
