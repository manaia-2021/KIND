import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import CategoriesCards from './CategoriesCards'
import { getCategoryActions } from '../apis/api'

jest.mock('./ListItems', () => (() => <div> mock test </div>))
jest.mock('../apis/api')
getCategoryActions.mockReturnValue(Promise.resolve({}))
test('cards display correctly', async () => {
  expect.assertions(1)
  render(<CategoriesCards/>)
  await waitFor(() => getCategoryActions.mock.calls.length > 1)
  const subheader = screen.getByTestId('subheader')
  expect(subheader.textContent).toMatch('category description')
}
)

// findByAllText
// fireevent.click on bitton

jest.mock('./CategoriesCards', () => (() => <button onClick={handleOpen}></button>))
getCategoryActions.mockReturnValue(Promise.resolve({}))
test('checks onClick', async () => {
  expect.assertions(1)
  const handleClick = jest.fn()
  render(<CategoriesCards/>)
  fireEvent.click(screen.getByTestId('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})