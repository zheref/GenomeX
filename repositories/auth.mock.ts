import Keys from '../resources/keys';

export async function fetchIdentityString(): Promise<string | null> {
  return 'persisted-mocked-identity';
}

export async function persistIdentityString(identity: string): Promise<void> {
  console.log(`Persisting ${identity} for key ${Keys.identityString}`);
}