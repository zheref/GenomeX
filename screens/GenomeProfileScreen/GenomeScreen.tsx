import * as React from 'react';
import {FlatList, Platform, ScrollView, StyleSheet, Text} from 'react-native';

import {View} from '../../components/Themed';
import Color from '../../constants/Color';
import IconButton from '../../components/IconButton';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import Row from '../../components/Row';
import {connect} from 'react-redux';
import {Dispatch, useEffect} from 'react';
import {forgetIdentityThunk} from '../../stores/auth/thunks';
import {fetchBioThunk} from '../../stores/bio/thunks';
import {Genome} from '../../stores/bio/types';
import {RootState} from '../../stores/types';
import ActivityFragment from '../../components/ActivityFragment';
import ProfileCard from '../../components/ProfileCard';
import {forgetBioAction} from '../../stores/bio/creators';
import Column from '../../components/Column';
import Font from '../../constants/Fonts';
import LinkCard from '../../components/LinkCard';

interface GenomeProfileScreenProps {
  dispatchSignOut: () => void;
  dispatchRefresh: () => void;
  isLoading: boolean;
  genome: Genome | null;
}

function GenomeProfileScreen({
                               dispatchRefresh,
                               dispatchSignOut,
                               isLoading,
                               genome
                             }: GenomeProfileScreenProps): React.ComponentElement<GenomeProfileScreenProps, any> {
  useEffect(() => {
    dispatchRefresh();
  }, []);

  return (
      <View style={styles.container}>
        <Row style={styles.headerRow}>
          <IconButton onPress={() => {
            dispatchSignOut();
          }}>
            <Ionicons name="exit" size={24} color="black"/>
          </IconButton>
        </Row>
        {isLoading && <ActivityFragment animated={true} darkMode={false}/>}
        {genome !== null && (
            <ScrollView>
              <Column style={styles.contentColumn}>
                <>
                  <Text style={styles.title}>Your Genome</Text>
                  <Row style={styles.genomeRow}>
                    <>
                      <ProfileCard onPress={() => {
                      }} person={genome.person}/>
                      <Column style={{justifyContent: 'flex-end',}}>
                        <View style={styles.weightCard}>
                          <MaterialCommunityIcons style={styles.weightCardIcon} name="weight" size={24}
                                                  color={Color.darkerForeground}/>
                          <Text style={styles.weighCardValue}>{Math.ceil(genome.person.weight)}</Text>
                          <Text style={styles.weightCardCaption}>Reputation</Text>
                        </View>
                      </Column>
                    </>
                  </Row>
                  <Row style={styles.linksRow}>
                    <FlatList data={genome.person.links}
                              renderItem={({item}) => <LinkCard link={item} style={styles.linkCard}/>}
                              keyExtractor={(link) => link.id} horizontal={true}
                              showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} />
                  </Row>
                </>
              </Column>
            </ScrollView>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightBackground,
    paddingTop: Platform.select({ios: 0, android: 40}),
  },
  headerRow: {
    flexDirection: 'row-reverse',
    marginHorizontal: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  title: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: Font.mainFont,
  },
  contentColumn: {
    marginTop: 24,
    color: Color.darkerForeground,
  },
  genomeRow: {
    marginLeft: 20,
    marginTop: 20,
  },
  weightCard: {
    backgroundColor: Color.whiteBackground,
    height: 110,
    width: 110,
    paddingVertical: 14,
    paddingHorizontal: 20,
    paddingLeft: 20,
    borderRadius: 22,
    flexDirection: 'column',
    marginLeft: 10,
  },
  weightCardIcon: {},
  weighCardValue: {
    fontSize: 18,
    marginTop: 8,
    color: Color.darkerForeground,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  weightCardCaption: {
    fontSize: 14,
    color: Color.darkForeground,
  },
  linksRow: {
    marginTop: 10,
  },
  linkCard: {
    marginRight: 10,
  }
});

const mapStateToProps = (state: RootState) => ({
  isLoading: state.bio.isLoading,
  genome: state.bio.genome,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatchSignOut: () => {
    dispatch(forgetIdentityThunk());
    dispatch(forgetBioAction());
  },
  dispatchRefresh: () => {
    dispatch(fetchBioThunk());
  },
});

const reactive = connect(mapStateToProps, mapDispatchToProps);
export default reactive(GenomeProfileScreen);