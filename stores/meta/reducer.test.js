import {setTabStandAction} from './creators';
import MetaReducer , {initialState} from './reducer';

describe('meta reducer', () => {
  test('sets tab stand onto global state', () => {
    const tabStand = 'jobs';
    expect(MetaReducer(initialState, setTabStandAction(tabStand))).toStrictEqual({
      ...initialState,
      tabStand,
    });
  });
})