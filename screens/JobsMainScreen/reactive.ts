import {RootState} from '../../stores/types';
import {getJobs} from '../../stores/bio/selectors';
import {Dispatch} from 'react';
import {forgetIdentityThunk} from '../../stores/auth/thunks';
import {fetchBioThunk} from '../../stores/bio/thunks';
import {connect} from 'react-redux';
import {fetchJobsThunk} from '../../stores/jobs/thunks';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.jobs.isLoading,
  opportunities: state.jobs.opportunities,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatchDownload: () => {
    dispatch(fetchJobsThunk());
  },
  dispatchRefresh: () => {
    dispatch(fetchBioThunk());
    dispatch(fetchJobsThunk());
  },
});

const reactive = connect(mapStateToProps, mapDispatchToProps);
export default reactive;