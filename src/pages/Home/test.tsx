import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render Home as default', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
  it('should render the Home as mobile', () => {
    const { container } = render(<Home />)
    const resizeWindow = (width: number, height: number) => {
      window = Object.assign(window, { innerWidth: width })
      window = Object.assign(window, { innerHeight: height })

      window.dispatchEvent(new Event('resize'))
    }
    resizeWindow(375, 600)
    expect(container).toMatchSnapshot()
  })
})
