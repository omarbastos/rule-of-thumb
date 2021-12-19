import { render, screen } from '@testing-library/react'

import GridView from '.'

describe('<App />', () => {
  it('should render App as default', () => {
    const { container } = render(<GridView polls={[]} />)

    expect(container).toMatchSnapshot()
  })
})
