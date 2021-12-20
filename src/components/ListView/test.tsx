import { Timestamp } from '@firebase/firestore'
import { render, screen } from '@testing-library/react'

import ListView from '.'

const polls = [
  {
    votes: {
      negative: 36.37,
      positive: 64.63
    },
    picture:
      'https://firebasestorage.googleapis.com/v0/b/rule-of-thumb-oh.appspot.com/o/greta.png?alt=media&token=0475699c-f335-4572-8573-254854cd765a',
    lastUpdated: new Timestamp(1639973375, 379000000),
    name: 'Greta Thumberg',
    description:
      "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
    category: 'environment',
    uid: '8x109cEi1pD27j5Hb92Q'
  }
]

describe('<ListView />', () => {
  it('should render ListView as default', () => {
    const { container } = render(<ListView polls={[]} />)

    expect(container).toMatchSnapshot()
  })

  it('should render ListView with data', () => {
    const { container } = render(<ListView polls={polls} />)

    expect(container).toMatchSnapshot()
  })
})
