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
import {Opportunity} from '../stores/jobs/types';

interface OpportunityCardProps {
  style?: object;
  opportunity: Opportunity;
  onPress: () => void;
}

const styles = StyleSheet.create({
  own: {
    backgroundColor: Color.darkerForeground,
    paddingVertical: 14,
    paddingHorizontal: 20,
    paddingLeft: 20,
    borderRadius: 22,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: Color.whiteBackground,
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
  icon: {
    height: 40,
    width: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default function OpportunityCard({
                                  style,
                                  opportunity,
                                  onPress,
                                }: OpportunityCardProps): React.ComponentElement<OpportunityCardProps, any> {

  //const dateRange = `${exp.fromYear} ${exp.toYear ? `- ${exp.toYear}` : ''}`;

  if (opportunity.organizations.length <= 0) {
    debugger;
  }

  const org = opportunity.organizations[0];
  const orgName = org.name || '';

  return (
      <TouchableOpacity style={{...styles.own, ...style}} onPress={onPress}>
        <Column style={styles.imageCol}>
          {(org && org.picture) ? (
              <Image
                  style={{height: 40, width: 40, borderRadius: 20,}}
                  source={{
                    uri: `${org.picture}`,
                  }}
              />
          ) : <Entypo name="suitcase" size={24} color="black" style={styles.icon}/>}
        </Column>
        <Column style={styles.textCol}>
          <>
            <Row>
              <Text style={styles.title} lineBreakMode="clip">{opportunity.objective}</Text>
            </Row>
            <Text
                style={styles.position}>
              {orgName}
            </Text>
          </>
        </Column>
      </TouchableOpacity>
  );
}
