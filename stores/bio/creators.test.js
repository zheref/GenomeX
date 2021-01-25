import {didFetchBioAction, bioLoadingChangeAction} from './creators';
import {ActionTypes} from './actions';
import {mockedMe} from '../../repositories/bio.mock';

describe('bio creators', () => {
  test('returns action to update state by putting genome in', () => {
    expect(didFetchBioAction(mockedMe)).toStrictEqual({
      type: ActionTypes.didFetchBio,
      payload: mockedMe,
    });
  });

  test('builds action object to change loading status', () => {
    const loading = true;
    expect(bioLoadingChangeAction(loading)).toStrictEqual({
      type: ActionTypes.bioLoadingChange,
      payload: loading,
    });
  })
})