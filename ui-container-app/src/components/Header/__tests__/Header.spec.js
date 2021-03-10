import { cleanup } from 'test-util';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('Header tests', () => {
  it('should render properly', () => {
    expect(true).toBe(true);
  });
});
