import {RootState} from '../../stores/types';
import {getJobs} from '../../stores/bio/selectors';
import {Dispatch} from 'react';
import {forgetIdentityThunk} from '../../stores/auth/thunks';
import {fetchBioThunk} from '../../stores/bio/thunks';
import {connect} from 'react-redux';
import {fetchJobsThunk} from '../../stores/jobs/thunks';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.bio.isLoading,
  genome: state.bio.genome,
  jobs: getJobs(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatchSignOut: () => {
    dispatch(forgetIdentityThunk());
  },
  dispatchDownload: () => {
    dispatch(fetchBioThunk());
  },
  dispatchRefresh: () => {
    dispatch(fetchBioThunk());
    dispatch(fetchJobsThunk());
  },
});

const reactive = connect(mapStateToProps, mapDispatchToProps);
export default reactive;