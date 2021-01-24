import * as React from 'react';
import {Text, ScrollView, View, SafeAreaView} from 'react-native';
import styles from './styles';
import Column from '../../components/Column';
import RegularInput from '../../components/RegularInput';
import LeadingButton from '../../components/LeadingButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function IdentifyYourself(): React.ComponentElement<any, any> {
  return (
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAwareScrollView keyboardDismissMode="interactive"
                                 contentInset={{top: 160, left: 0, bottom: 0, right: 0}}
                                 resetScrollToCoords={{x: 0, y: 0,}}>
          <Column style={styles.column}>
            <>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.prompt}>Let us know who you are...</Text>
              <RegularInput style={styles.input} placeholder="Enter your bio handle" returnKeyType="done" />
              <LeadingButton style={styles.cta} caption="Continue"/>
            </>
          </Column>
        </KeyboardAwareScrollView>
      </SafeAreaView>
  )
}