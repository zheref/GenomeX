import AsyncStorage from '@react-native-community/async-storage';
import Keys from '../resources/keys';

export async function fetchIdentityString(): Promise<string | null> {
    return await AsyncStorage.getItem(Keys.identityString);
}

export async function persistIdentityString(identity: string): Promise<void> {
    return await AsyncStorage.setItem(Keys.identityString, identity);
}

export async function forgetIdentityString(): Promise<void> {
    await AsyncStorage.removeItem(Keys.identityString);
}