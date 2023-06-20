import { describe, expect, it } from 'vitest'
import { render, screen } from '../../utils/test-utils'
import { Header } from './index'

describe('Input', async () => {
  it('should render the input', () => {
    render(<Header text="email" />)
    expect(screen.getByText('email')).toBeInTheDocument()
  })
})
