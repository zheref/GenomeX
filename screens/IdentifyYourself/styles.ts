import {StyleSheet} from 'react-native';
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
    //marginTop: 120,
  },
  welcomeText: {
    color: Color.whiteForeground,
    fontSize: 45,
    fontFamily: Font.title,
  },
  prompt: {
    color: Color.lightGrayForeground,
    fontSize: 38,
    fontFamily: Font.title,
  },
  input: {
    marginTop: 24,
  },
  cta: {
    marginTop: 20,
  }
});