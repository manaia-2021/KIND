import React from 'react'
import { render, screen } from '@testing-library/react'
import CategoriesCards from './CategoriesCards'
import ListItems from './ListItems'

jest.mock('./ListItems')
ListItems.mockImplementation(() => (<div> mock test </div>))
test('cards display correctly', () => {
  // await ListItems.mockImplementation(() => Promise.resolve(<div> mock test </div>))
  // const ListItems = await (() => (<div> mock test </div>))
  expect.assertions(1)
  render(<CategoriesCards/>)
  const subheader = screen.getByTestId('subheader')
  expect(subheader.textContent).toMatch('category description')
  return null
}
)
