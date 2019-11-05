import React from 'react';
import AskUs from './AskUs'
import {  render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<AskUs/>' , () => {
  test('renders without Crash', () => {
      const { getByText, debug } = render(<AskUs />);
      debug()
    expect(getByText('Ask new question')).toBeInTheDocument();
  })
})