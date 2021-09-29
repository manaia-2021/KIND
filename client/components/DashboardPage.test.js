import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import { render, screen } from '@testing-library/react'

import DashboardPage from './DashboardPage'

import { getUserActions, updateUserAction } from '../apis/api'

jest.mock('../apis/api')

afterEach(() => {
  return jest.resetAllMocks()
})

test('Find  checkbox', () => {
  // expect.assertions(2)

  getUserActions.mockImplementation(() => {
    return Promise.resolve([
      { title: 'waste', description: 'Purchase a second hand item', points: 5, completed: false }
    ])
  })
  updateUserAction.mockImplementation((newAction) => {
    return Promise.resolve([
      { title: 'waste', description: 'Purchase a second hand item', points: 5, completed: true }
    ])
  })

  jest.spyOn(store, 'getState').mockReturnValue({
    user: { id: 1 }
  })

  render(
    <Provider store={store}>
      <Router>
        <DashboardPage />
      </Router>
    </Provider>
  )

  return screen.findAllByRole('checkbox')
    .then(() => {
      const checkboxes = screen.getAllByRole('checkbox')
      expect(checkboxes).toHaveLength(1)

      return null
    })
})
