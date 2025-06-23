import { storage } from '../lib/storage';
import { saveUsername, getUsername } from '../user';

jest.mock('../lib/storage');

test('first example', () => {
  const myMock = jest.fn()
  .mockReturnValueOnce(true)
  expect(result2).toBe('hello world');
  expect(result3).toBe(5);
});

test('second example', () => {
  const username = 'john doe';
  saveUsername(username);
  expect(storage.save).toHaveBeenCalledTimes(1);
  expect(storage.save).toHaveBeenCalledWith({ key:'username', value: username });
});

test('third example', () => {
  const username = 'john doe';
  storage.get.mockReturnValueOnce(username);

  const result = getUsername();

  expect(result).toBe(username)
  expect(storage.get).toHaveBeenCalledTimes(1);
  expect(storage.get).toHaveBeenCalledWith({ key:'username' });
});