import {didFetchBioAction, bioLoadingChangeAction, forgetBioAction} from './creators';
import {ActionTypes} from './actions';
import {mockedMe} from '../../repositories/bio.mock';

describe('bio creators', () => {
  test('returns action to update state by putting genome in', () => {
    expect(didFetchBioAction(mockedMe)).toStrictEqual({
      type: ActionTypes.didFetchBioAction,
      payload: mockedMe,
    });
  });

  test('builds action object to change loading status', () => {
    const loading = true;
    expect(bioLoadingChangeAction(loading)).toStrictEqual({
      type: ActionTypes.bioLoadingChangeAction,
      payload: loading,
    });
  });

  test('builds action to forget cached bio for current authenticate identity', () => {
    expect(forgetBioAction()).toStrictEqual({
      type: ActionTypes.forgetBioAction,
    });
  });
})