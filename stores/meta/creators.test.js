import {setTabStandAction} from './creators';
import {ActionTypes} from './actions';

describe('meta creators', () => {
  test('returns action to set tab stand', () => {
    const tabStand = 'jobs';
    expect(setTabStandAction(tabStand)).toStrictEqual({
      type: ActionTypes.setTabStand,
      payload: tabStand,
    });
  });
})