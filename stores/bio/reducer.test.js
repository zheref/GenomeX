import {didFetchBioAction, bioLoadingChangeAction} from './creators';
import BioReducer, {initialState} from './reducer';
import {mockedMe} from '../../repositories/bio.mock';

describe('bio reducer', () => {
  test('sets new genome value onto global state', () => {
    expect(BioReducer(initialState, didFetchBioAction(mockedMe))).toStrictEqual({
      ...initialState,
      genome: mockedMe,
      isLoading: false,
    });
  });

  test('changes loading state', () => {
    const isLoading = true;
    expect(BioReducer(initialState, bioLoadingChangeAction(isLoading))).toStrictEqual({
      ...initialState,
      isLoading,
    });
  });
})