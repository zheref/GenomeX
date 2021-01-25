import Keys from '../constants/Keys';
import AsyncStorage from '@react-native-community/async-storage';

export async function fetchIdentityString(): Promise<string | null> {
  return 'persisted-mocked-identity';
}

export async function persistIdentityString(identity: string): Promise<void> {
  console.log(`Persisting ${identity} for key ${Keys.identityString}`);
}

export async function forgetIdentityString(): Promise<void> {
  console.log(`Removing value for key ${Keys.identityString}`);
}