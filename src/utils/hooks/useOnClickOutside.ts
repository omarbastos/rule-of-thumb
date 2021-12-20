import { RefObject, useEffect } from 'react'

type AnyEvent = MouseEvent | TouchEvent

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  // eslint-disable-next-line no-unused-vars
  handler: (event: AnyEvent) => void
): void {
  useEffect(() => {
    /* istanbul ignore next */
    const listener = (event: AnyEvent) => {
      const el = ref?.current

      if (!el || el.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
