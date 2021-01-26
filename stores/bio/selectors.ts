import {createSelector} from 'reselect';
import {RootState} from '../types';

const getExperiences = (state: RootState) => {
  if (state.bio.genome) {
    return state.bio.genome.experiences;
  }

  return [];
}

export const getJobs = createSelector([getExperiences],
    (experiences) => experiences.filter(exp => exp.category === 'jobs'));