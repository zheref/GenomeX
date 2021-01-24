import {Platform, StyleSheet} from 'react-native';
import Color from '../../resources/colors';
import Font from '../../resources/fonts';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.blackBackground,
  },
  column: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 120 : 0,
    //marginTop: 120,
  },
  welcomeText: {
    color: Color.whiteForeground,
    fontSize: 45,
    fontFamily: Font.mainFont,
    fontWeight: 'bold',
  },
  prompt: {
    color: Color.lightGrayForeground,
    fontSize: 38,
    fontFamily: Font.mainFont,
    fontWeight: '600',
  },
  input: {
    marginTop: 24,
    color: Color.whiteForeground,
  },
  cta: {
    marginTop: 20,
  }
});