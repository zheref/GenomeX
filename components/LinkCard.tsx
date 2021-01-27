import React from 'react';
import {StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Color from '../constants/Color';
import Center from './Center';
import {GenomeLink} from '../stores/bio/types';
import {Entypo} from '@expo/vector-icons';

interface LinkCardProps {
  style?: object;
  link: GenomeLink;
}

const styles = StyleSheet.create({
  own: {
    backgroundColor: Color.whiteBackground,
    height: 70,
    width: 70,
    paddingVertical: 14,
    paddingHorizontal: 20,
    paddingLeft: 20,
    borderRadius: 22,
    flexDirection: 'row',
  },
});

export default function LinkCard({
                                   style,
                                   link
                                 }: LinkCardProps): React.ComponentElement<LinkCardProps, any> {

  const service = link.name === '' ? 'link' : link.name;

  return (
      <TouchableOpacity style={{...styles.own, ...style}} onPress={() => {
        Linking.openURL(link.address).then(() => {});
      }}>
        <Center>
          <Entypo name={service} size={30} color={Color[`${service}`]}/>
        </Center>
      </TouchableOpacity>
  );
}
