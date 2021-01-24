import * as React from 'react';
import {Text, ScrollView, View, SafeAreaView} from 'react-native';
import styles from './styles';
import Column from '../../components/Column';
import RegularInput from '../../components/RegularInput';
import LeadingButton from '../../components/LeadingButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dispatch} from 'react';
import {persistIdentityString} from '../../repositories/auth';
import {connect} from 'react-redux';
import {identifyThunk} from '../../stores/auth/thunks';

interface IdentifyYourselfProps {
  dispatchIdentify: (identity: string) => void;
}

function IdentifyYourself({dispatchIdentify}: IdentifyYourselfProps): React.ComponentElement<IdentifyYourselfProps, any> {
  const [identity, setIdentity] = React.useState('');

  return (
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView keyboardDismissMode="interactive"
                                 contentInset={{top: 160, left: 0, bottom: 0, right: 0}}
                                 resetScrollToCoords={{x: 0, y: 0,}}>
          <Column style={styles.column}>
            <>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.prompt}>Let us know who you are...</Text>
              <RegularInput style={styles.input} placeholder="Enter your bio handle" returnKeyType="done"
                            value={identity} onChangeText={(text) => setIdentity(text)}/>
              <LeadingButton style={styles.cta} caption="Continue" onPress={() => dispatchIdentify(identity)}/>
            </>
          </Column>
        </KeyboardAwareScrollView>
      </SafeAreaView>
  )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatchIdentify: (identity: string) => dispatch(identifyThunk(identity)),
});

const reactive = connect(mapStateToProps, mapDispatchToProps);

export default reactive(IdentifyYourself);