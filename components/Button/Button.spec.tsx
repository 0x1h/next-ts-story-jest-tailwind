/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from "./Button";

describe('[Component] Button', () => {
  it('should render component', () => {
    render(<Button />)
  
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})