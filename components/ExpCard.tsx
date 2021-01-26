import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, Linking} from 'react-native';
import Color from '../constants/Color';
import Font from '../constants/Fonts';
import Center from './Center';
import {BioExperience, GenomeLink, GenomePerson} from '../stores/bio/types';
import Row from './Row';
import Column from './Column';
import {Entypo} from '@expo/vector-icons';
import {View} from './Themed';

interface ExpCardProps {
  style?: object;
  exp: BioExperience;
  onPress: () => void;
}

const styles = StyleSheet.create({
  own: {
    backgroundColor: Color.whiteBackground,
    paddingVertical: 14,
    paddingHorizontal: 20,
    paddingLeft: 20,
    borderRadius: 22,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: Color.darkerForeground,
    fontWeight: 'bold',
    width: '100%',
    flexWrap: 'wrap',
    flex: 1,
  },
  position: {
    fontSize: 14,
    color: Color.darkForeground,
  },
  imageCol: {
    justifyContent: 'center',
  },
  textCol: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
  },
});

export default function ExpCard({
                                  style,
                                  exp,
                                  onPress,
                                }: ExpCardProps): React.ComponentElement<ExpCardProps, any> {

  return (
      <TouchableOpacity style={{...styles.own, ...style}} onPress={onPress}>
        <Column style={styles.imageCol}>
          <Image
              style={{height: 40, width: 40, borderRadius: 20,}}
              source={{
                uri: `${exp.organizations[0].picture}`,
              }}
          />
        </Column>
        <Column style={styles.textCol}>
          <>
            <Row>
              <Text style={styles.title} lineBreakMode="clip">{exp.name}</Text>
            </Row>
            <Text style={styles.position}>{exp.organizations[0].name}</Text>
          </>
        </Column>
      </TouchableOpacity>
  );
}
