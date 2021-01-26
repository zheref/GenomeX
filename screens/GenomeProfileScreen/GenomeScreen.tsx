import * as React from 'react';
import {FlatList, RefreshControl, SafeAreaView, Text} from 'react-native';

import {View} from '../../components/Themed';
import Color from '../../constants/Color';
import IconButton from '../../components/IconButton';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import Row from '../../components/Row';
import {connect} from 'react-redux';
import {Dispatch, useEffect} from 'react';
import {BioExperience, Genome} from '../../stores/bio/types';
import ProfileCard from '../../components/ProfileCard';
import Column from '../../components/Column';
import LinkCard from '../../components/LinkCard';
import ExpCard from '../../components/ExpCard';
import styles from './styles';
import {RootState} from '../../stores/types';
import {forgetIdentityThunk} from '../../stores/auth/thunks';
import {fetchBioThunk} from '../../stores/bio/thunks';
import {getJobs} from '../../stores/bio/selectors';

interface GenomeProfileScreenProps {
  dispatchSignOut: () => void;
  dispatchRefresh: () => void;
  isLoading: boolean;
  genome: Genome | null;
  jobs: BioExperience[];
}

function GenomeProfileScreen({
                               dispatchRefresh,
                               dispatchSignOut,
                               isLoading,
                               genome,
                               jobs,
                             }: GenomeProfileScreenProps): React.ComponentElement<GenomeProfileScreenProps, any> {
  useEffect(() => {
    dispatchRefresh();
  }, []);

  const fixedTree = (genome: Genome) => (
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
          <FlatList data={genome.person.links}
                    renderItem={({item}) => <LinkCard link={item} style={styles.linkCard}/>}
                    keyExtractor={(link) => link.id} horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.linksFlatListContentContainer}/>
          <Text style={styles.heading}>Skills</Text>
          <FlatList data={genome.strengths}
                    renderItem={({item}) => (
                        <View style={styles.skillContainer}>
                          <Text style={styles.skillText}>{item.name}</Text>
                        </View>
                    )}
                    keyExtractor={(strength) => strength.id} horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.skillsFlatListContentContainer}/>
          <Text style={styles.heading}>Experience</Text>
        </>
      </Column>
  );

  return (
      <SafeAreaView style={styles.container}>
        <Row style={styles.headerRow}>
          <IconButton onPress={() => {
            dispatchSignOut();
          }}>
            <Ionicons name="exit" size={24} color="black"/>
          </IconButton>
        </Row>
        {(
            <FlatList data={jobs}
                      ListHeaderComponent={genome !== null ? fixedTree(genome) : null}
                      keyExtractor={(strength) => strength.id}
                      contentContainerStyle={styles.containerFlatListContentStyle}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => <ExpCard exp={item} onPress={() => {
                      }} style={styles.expCard}/>}
                      refreshControl={
                        <RefreshControl refreshing={isLoading} onRefresh={dispatchRefresh}/>
                      }/>
        )}
      </SafeAreaView>
  );
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.bio.isLoading,
  genome: state.bio.genome,
  jobs: getJobs(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatchSignOut: () => {
    dispatch(forgetIdentityThunk());
  },
  dispatchRefresh: () => {
    dispatch(fetchBioThunk());
  },
});

const reactive = connect(mapStateToProps, mapDispatchToProps);
export default reactive(GenomeProfileScreen);