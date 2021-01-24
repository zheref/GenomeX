import React from 'react';
import {Platform, ReturnKeyTypeOptions, StyleSheet, TextInput, View} from 'react-native';
import Color from '../resources/colors';
import Font from '../resources/fonts';

interface RegularInputProps {
  style?: object;
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  autocompleteType?: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const styles = StyleSheet.create({
  own: {
    backgroundColor: Color.grayInput,
    fontSize: 16,
    fontFamily: Font.mainFont,
    height: 60,
    padding: 20,
    borderRadius: 20,
  },
});

export default function RegularInput(props: RegularInputProps) {
  return (
      <TextInput placeholder={props.placeholder || ''} style={{...styles.own, ...props.style}}
                 returnKeyType={props.returnKeyType} autoCompleteType="username" value={props.value}
                 onChangeText={props.onChangeText}
                 keyboardType={Platform.select({ios: 'twitter', android: 'email-address'})} autoCapitalize="none" />
  );
}
