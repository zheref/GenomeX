import * as React from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';

import {View} from '../../components/Themed';
import Color from '../../resources/colors';
import IconButton from '../../components/IconButton';
import {Ionicons} from '@expo/vector-icons';
import Row from '../../components/Row';
import {connect} from 'react-redux';
import {Dispatch} from 'react';
import {forgetIdentityThunk} from '../../stores/auth/thunks';

interface GenomeProfileScreenProps {
  dispatchSignOut: () => void;
}

function GenomeProfileScreen({dispatchSignOut}: GenomeProfileScreenProps): React.ComponentElement<GenomeProfileScreenProps, any> {
  return (
      <View style={styles.container}>
        <Row style={{flexDirection: 'row-reverse'}}>
          <IconButton onPress={() => {
            dispatchSignOut();
          }}>
            <Ionicons name="exit" size={24} color="black"/>
          </IconButton>
        </Row>

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

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatchSignOut: () => {
    dispatch(forgetIdentityThunk());
  },
})

const reactive = connect(undefined, mapDispatchToProps);
export default reactive(GenomeProfileScreen);