import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'

import LeaderBoard from './LeaderBoard'
import { getLeaderboard } from '../apis/api'

jest.mock('../apis/api')

afterEach(() => {
  return jest.resetAllMocks()
})

test('leaderboard component has loaded and is displaying the correct heading', () => {
  getLeaderboard.mockImplementation((newMessage) => {
    return Promise.resolve([{ user_name: 'kindNirvan', points: 56, avatar_url: '/images/avatar.jpg' }])
  })

  render(<LeaderBoard />)

  waitFor(() => {
    const setUsers = []
    // eslint-disable-next-line quotes
    expect(setUsers("kindNirvan")).toBeInTheDocument()
  })

  const heading = screen.getByText(/Leaderboard/)
  expect(heading).not.toBeUndefined()
})
