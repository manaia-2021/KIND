import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'


import store from '../store'

import HeaderBar from './HeaderBar'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}))

test('HeaderBar component has loaded', () => {
  render(<Provider store={store}><Router><HeaderBar /></Router></Provider>)

  const heading = screen.getByText(/KIND/)
  expect(heading).not.toBeUndefined()
})

test('HeaderBar click KIND button', () => {
  render(<Provider store={store}><Router><HeaderBar /></Router></Provider>)

  const button = screen.getByText('KIND')
  fireEvent.click(button)
  expect(mockHistoryPush).toHaveBeenCalledWith('/')
})

test('HeaderBar click Leaderboard button', () => {
  render(<Provider store={store}><Router><HeaderBar /></Router></Provider>)

  const button = screen.getByText('Leaderboard')
  fireEvent.click(button)
  expect(mockHistoryPush).toHaveBeenCalledWith('/leaderboard')
})
