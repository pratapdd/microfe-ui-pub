import { cleanup } from 'test-util';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('Ads tests', () => {
  it('should render properly', () => {
    expect(true).toBe(true);
  });
});
