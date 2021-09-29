/* eslint-disable jest/no-commented-out-tests */
import { getRandomAvatar, generateUsername } from './utils'

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.123)
})

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore()
})

test('send request to random avatar api and returns response', () => {
  const response = getRandomAvatar()

  expect(response).toBe('https://avatars.dicebear.com/api/jdenticon/123.svg')
})

test('create random username', () => {
  const username = generateUsername()

  expect(username).toBe('CalmMountain')
})
