import {StateIndependentThunk} from './types';
import {fetchIdentityString, persistIdentityString} from '../../repositories/auth';
import {restoreIdentity, signIn} from './creators';

export function bootstrapThunk(): StateIndependentThunk {
  return (dispatch) => {
    fetchIdentityString().then((identity: string | null) => {
      if (identity) {
        dispatch(restoreIdentity(identity));
      }
    }).catch(e => {
      // TODO: Display user friendly error
      console.error(e);
    });
  }
}

export function identifyThunk(identity: string): StateIndependentThunk {
  return dispatch => {
    persistIdentityString(identity).then(() => {
      dispatch(signIn(identity));
    }).catch(e => {
      // TODO: Display user friendly error
      console.error(e);
    });
  };
}