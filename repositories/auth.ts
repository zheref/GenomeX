import AsyncStorage from '@react-native-community/async-storage';
import Keys from '../common/Keys';

export async function fetchIdentityString(): Promise<string | null> {
    return await AsyncStorage.getItem(Keys.identityString);
}