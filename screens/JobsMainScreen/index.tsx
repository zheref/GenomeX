import * as React from 'react';
import {FlatList, RefreshControl, SafeAreaView, Text} from 'react-native';

import Color from '../../constants/Color';
import IconButton from '../../components/IconButton';
import {Ionicons} from '@expo/vector-icons';
import Row from '../../components/Row';
import {useEffect} from 'react';
import {BioExperience} from '../../stores/bio/types';
import Column from '../../components/Column';
import styles from './styles';
import reactive from './reactive';
import {Opportunity} from '../../stores/jobs/types';
import OpportunityCard from '../../components/OpportunityCard';

interface JobsMainScreenProps {
  dispatchDownload: () => void;
  dispatchRefresh: () => void;
  isLoading: boolean;
  opportunities: Opportunity[];
  jobs: BioExperience[];
}

function JobsMainScreen({
                               dispatchDownload,
                               dispatchRefresh,
                               isLoading,
                               opportunities,
                             }: JobsMainScreenProps): React.ComponentElement<JobsMainScreenProps, any> {
  useEffect(() => {
    dispatchDownload();
  }, []);

  return (
      <SafeAreaView style={styles.container}>
        <Row style={styles.headerRow}>
          <IconButton style={{backgroundColor: Color.darkerForeground}} onPress={() => {
            // TODO: Provide refresh functionalitiy?
          }}>
            <Ionicons name="exit" size={24} color="white"/>
          </IconButton>
        </Row>
        {(
            <FlatList data={opportunities}
                      ListHeaderComponent={(
                          <Column style={styles.contentColumn}>
                            <Text style={styles.title}>Your Best Chances</Text>
                          </Column>
                      )}
                      keyExtractor={(strength) => strength.id}
                      contentContainerStyle={styles.containerFlatListContentStyle}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({item}) => <OpportunityCard opportunity={item} onPress={() => {}} style={styles.oppCard} />}
                      refreshControl={
                        <RefreshControl refreshing={isLoading} onRefresh={dispatchRefresh} />
                      }/>
        )}
      </SafeAreaView>
  );
}

export default reactive(JobsMainScreen);