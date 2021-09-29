import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import { render, screen, fireEvent } from '@testing-library/react'

import UserActions from './UserActions'

import { getUserActions, updateUserAction, updateUserPoints } from '../apis/api'

jest.mock('../apis/api')

afterEach(() => {
  return jest.resetAllMocks()
})

test('find rows of the waste', () => {
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

  // render <UserAction />
  render(
    <Provider store={store}>
      <Router>
        <UserActions />
      </Router>
    </Provider>
  )

  // fireEvent.change(
  //   screen.getByRole('checkbox'), { target: { value: '' } }
  // )

  // fireEvent.click(screen.getByRole('button'))

  return screen.findByText('waste')
    .then(() => {
      const rows = screen.getAllByRole('row')
      expect(rows).toHaveLength(2)

      // find the checkbox
      // simulate a change event pass in {target: {checked: true}}
      // what's different?
      // was an api call called how i expect
      // can I see / not see different stuff
      // expect(updateUserAction).toHaveBeenCalledTimes(1)
      return null
    })
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
        <UserActions />
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
