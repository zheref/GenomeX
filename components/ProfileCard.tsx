import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Color from '../constants/Color';
import Font from '../constants/Fonts';
import Center from './Center';
import {GenomePerson} from '../stores/bio/types';
import Row from './Row';
import Column from './Column';
import {Entypo} from '@expo/vector-icons';

interface ProfileCardProps {
  style?: object;
  onPress: () => void;
  person: GenomePerson;
}

const styles = StyleSheet.create({
  own: {
    backgroundColor: Color.whiteBackground,
    width: 200,
    paddingVertical: 14,
    paddingHorizontal: 20,
    paddingLeft: 20,
    borderRadius: 22,
    flexDirection: 'row',
  },
  caption: {
    fontSize: 18,
    fontFamily: Font.title,
  },
  name: {
    fontSize: 18,
    marginTop: 8,
    color: Color.darkerForeground,
    fontWeight: 'bold',
  },
  headline: {
    fontSize: 14,
    color: Color.darkForeground,
  },
  locationIcon: {
    marginTop: 1,
    marginLeft: -3,
  },
  location: {
    fontSize: 12,
    color: Color.darkForeground,
  },
});

export default function ProfileCard({
                                      style,
                                      onPress,
                                      person
                                    }: ProfileCardProps): React.ComponentElement<ProfileCardProps, any> {
  return (
      <TouchableOpacity style={{...styles.own, ...style}} onPress={onPress}>
        <Column>
          <>
            <Image
                style={{height: 50, width: 50, borderRadius: 25,}}
                source={{
                  uri: `${person.picture}`,
                }}
            />
            <Text style={styles.name}>{person.name}</Text>
            <Text style={styles.headline}>{person.professionalHeadline}</Text>
            <Row>
              <>
                <Entypo style={styles.locationIcon} name="location-pin" size={12} color={Color.darkForeground} />
                <Text style={styles.location}>{person.location.name}</Text>
              </>
            </Row>

          </>
        </Column>
      </TouchableOpacity>
  );
}
