import {Platform} from 'react-native';

interface FontStructure {
  title: string;
  heading: string;
  mainFont: string;
}

const lastCase: FontStructure = {
  title: 'serif',
  heading: 'serif',
  mainFont: 'serif',
};

const Font: FontStructure = Platform.select({
  ios: {
    title: 'Avenir-Heavy',
    heading: 'Avenir-Medium',
    mainFont: 'Avenir-Book',
  },
  android: {
    title: 'Roboto',
    heading: 'Roboto',
    mainFont: 'Roboto',
  },
}) || lastCase;

export default Font;