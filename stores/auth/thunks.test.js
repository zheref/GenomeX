import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import fetchMock from 'fetch-mock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import thunk from 'redux-thunk';

jest.mock('../../repositories/auth', () => ({
  __esModule: true, // this property makes it work
  default: mockSleepSessionsService,
}));

describe('auth side effects', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('restores identity after being retrieved from key-value storage from platform', () => {

  })
});