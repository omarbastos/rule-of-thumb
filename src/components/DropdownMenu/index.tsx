import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { VIEWS } from 'utils/constants'
import useOnClickOutside from 'utils/hooks/useOnClickOutside'

interface Props {
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
}

const DropdownMenu = ({ setSelected, selected }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const itemsMenu = [
    {
      id: '1',
      title: VIEWS.LIST
    },
    { id: '2', title: VIEWS.GRID }
  ]
  const handleSelected = (title: string) => {
    setSelected(title)
    setIsVisible(!isVisible)
  }
  const ref = useRef(null)
  useOnClickOutside(ref, () => setIsVisible(false))

  return (
    <div className="relative flex-none" ref={ref}>
      <button
        aria-label="View"
        onClick={() => setIsVisible(!isVisible)}
        className="w-40 bg-white text-sm py-2 px-4 whitespace-nowrap text-black border-solid border-2 border-black font-normal flex justify-center items-center"
        type="button"
        data-testid="button-dropdow-menu"
      >
        <span className="flex-auto"> {selected}</span>
        <svg
          className=" flex-none justify-self-end"
          width={11}
          height={7}
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.25 7L6.11959e-07 -9.17939e-07L10.5 0L5.25 7Z"
            fill="#333333"
          />
        </svg>
      </button>
      {isVisible && (
        <div className="origin-top-left absolute left-0 w-full drop-shadow-lg overflow-y-auto max-h-32 z-10 divide-y-2">
          <ul className="cursor-pointer font-normal    text-sm bg-white  whitespace-nowrap text-black ">
            {itemsMenu.map((item) => {
              return (
                <li
                  data-testid={`dropdown-option-${item.id}`}
                  className="border-solid border-b-2 border-l-2 border-r-2 border-black py-2 px-4 flex justify-center items-center"
                  onClick={() => handleSelected(item.title)}
                  key={item.id}
                >
                  {item.title}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
