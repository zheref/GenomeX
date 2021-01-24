import AsyncStorage from '@react-native-community/async-storage';
import Keys from '../resources/keys';

export async function fetchIdentityString(): Promise<string | null> {
    return await AsyncStorage.getItem(Keys.identityString);
}