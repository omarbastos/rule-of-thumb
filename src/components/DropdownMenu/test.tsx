import { fireEvent, render } from '@testing-library/react'
import DropdownMenu from '.'
import { VIEWS } from '../../utils/constants'

describe('<DropdownMenu />', () => {
  it('should render DropdownMenu as default', () => {
    const mockSetSelected = jest.fn()
    const { container } = render(
      <DropdownMenu selected={VIEWS.GRID} setSelected={mockSetSelected} />
    )

    expect(container).toMatchSnapshot()
  })

  it('should called mockSetSelected when select an option', () => {
    const mockSetSelected = jest.fn()
    const { getByTestId } = render(
      <DropdownMenu selected={VIEWS.GRID} setSelected={mockSetSelected} />
    )
    fireEvent.click(getByTestId('button-dropdow-menu'))
    fireEvent.click(getByTestId('dropdown-option-1'))
    expect(mockSetSelected).toBeCalled()
  })
})
