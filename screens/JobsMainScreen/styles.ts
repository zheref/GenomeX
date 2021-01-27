import {Platform, StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import Font from '../../constants/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.darkerBackground,
    paddingTop: Platform.select({ios: 0, android: 40}),
  },
  headerRow: {
    flexDirection: 'row-reverse',
    marginHorizontal: 20,
  },
  title: {
    marginLeft: 21,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: Font.mainFont,
    color: Color.whiteForeground,
    marginBottom: 20,
  },
  contentColumn: {
    marginTop: 24,
    color: Color.darkerForeground,
  },
  genomeRow: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
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
  linkCard: {
    marginRight: 10,
  },
  linksFlatListContentContainer: {
    paddingHorizontal: 20
  },
  heading: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 21,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Font.mainFont,
  },
  skillsFlatListContentContainer: {
    paddingHorizontal: 20
  },
  skillContainer: {
    backgroundColor: Color.whiteBackground,
    marginRight: 7,
    borderRadius: 12,
    padding: 12,
  },
  skillText: {
    color: Color.darkerForeground,
    fontSize: 14,
  },
  expRow: {
    marginBottom: 20,
  },
  oppCard: {
    marginBottom: 10,
    marginHorizontal: 20,
  },
  containerFlatListContentStyle: {
    paddingBottom: 40,
  },
  selfBioContainer: {
    height: '100%',
    backgroundColor: Color.whiteBackground,
    flex: 1,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingLeft: 20,
    borderRadius: 22,
    flexDirection: 'row',
  },
});

export default styles;