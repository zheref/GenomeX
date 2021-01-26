import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, Linking} from 'react-native';
import Color from '../constants/Color';
import Font from '../constants/Fonts';
import Center from './Center';
import {GenomeLink, GenomePerson} from '../stores/bio/types';
import Row from './Row';
import Column from './Column';
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

  return (
      <TouchableOpacity style={{...styles.own, ...style}} onPress={() => {
        Linking.openURL(link.address);
      }}>
        <Center>
          <Entypo name={link.name} size={30} color={Color[`${link.name}`]}/>
        </Center>
      </TouchableOpacity>
  );
}
