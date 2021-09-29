import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { screen, render, fireEvent } from '@testing-library/react'

import LandingPage from './LandingPage'

test('LandingPage component has loaded', () => {
  render(<Router><LandingPage /></Router>)

  const heading = screen.getByText(/KIND/)
  expect(heading).not.toBeUndefined()
})

test('LandingPage Start button is clicked', () => {
  const handleClick = jest.fn()
  render(<button onClick={handleClick}>Start</button>)
  fireEvent.click(screen.getByText(/Start/))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
