import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render App as default', () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot()
  })
})
