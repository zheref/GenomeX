import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Color from '../resources/colors';
import Font from '../resources/fonts';

interface LeadingButtonProps {
  style?: object;
  caption: string;
}

const styles = StyleSheet.create({
  own: {
    backgroundColor: Color.whiteForeground,
    height: 60,
    paddingVertical: 18,
    borderRadius: 20,
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
      <TouchableOpacity style={{...styles.own, ...props.style}}>
        <Text style={styles.caption}>{props.caption}</Text>
      </TouchableOpacity>
  );
}
