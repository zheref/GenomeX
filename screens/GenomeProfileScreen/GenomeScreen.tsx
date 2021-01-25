import * as React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

import {View} from '../../components/Themed';
import Color from '../../constants/Color';
import IconButton from '../../components/IconButton';
import {Ionicons} from '@expo/vector-icons';
import Row from '../../components/Row';
import {connect} from 'react-redux';
import {Dispatch, useEffect} from 'react';
import {forgetIdentityThunk} from '../../stores/auth/thunks';
import {fetchBioThunk} from '../../stores/bio/thunks';
import {Genome} from '../../stores/bio/types';
import {RootState} from '../../stores/types';
import ActivityFragment from '../../components/ActivityFragment';

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
        <Row style={{flexDirection: 'row-reverse'}}>
          <IconButton onPress={() => {
            dispatchSignOut();
          }}>
            <Ionicons name="exit" size={24} color="black"/>
          </IconButton>
        </Row>
        {isLoading && <ActivityFragment animated={true} darkMode={false} />}
        {genome !== null && (
            <Text>There's a genome!</Text>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightBackground,
    paddingHorizontal: 20,
    paddingTop: Platform.select({ios: 0, android: 40}),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const mapStateToProps = (state: RootState) => ({
  isLoading: state.bio.isLoading,
  genome: state.bio.genome,
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