interface ThumbsUpProps {
  onClick?: () => void
  className?: string
  width?: number
  disabled?: boolean
  height?: number
}
const ThumbsUp = ({
  onClick,
  className,
  disabled,
  width,
  height
}: ThumbsUpProps) => {
  return (
    <button
      disabled={disabled}
      aria-label="Thumbs Up"
      onClick={onClick}
      className={`square p-1.5 object-center bg-thumb-up ${
        !disabled && 'hover:bg-thumb-up-200'
      } ${className}`}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.39556 7.10739C5.33333 4.40864 6.02086 3.63942 5.90612 2.07721C5.79138 0.515007 6.1196 0.085454 6.90037 0.00853218C7.68115 -0.0683897 9.14717 0.334371 9.40453 2.89138C9.51561 3.99767 8.68044 6.17569 8.68044 6.17569L14.5244 6.17871C15.3518 6.17871 16 6.51363 16 7.58103C16 8.58101 14.8311 8.88179 14.8311 8.88179C15.2946 9.07914 15.5889 9.51885 15.579 9.99931C15.5818 10.6772 15.0051 11.2301 14.288 11.237C14.7786 11.4233 15.0587 11.9138 14.9545 12.4038C14.8656 12.991 14.3849 13.4563 13.766 13.5541C14.1713 13.8252 14.3388 14.3165 14.1774 14.7603C13.915 15.3463 13.2225 15.9923 11.6669 15.9923L4.39987 15.9923C3.96738 16.0441 3.54771 15.831 3.35442 15.4616L3.35442 7.43409C3.35141 7.32389 3.36526 7.21385 3.39556 7.10739ZM-1.15248e-06 6.59141L2.84289 6.59141L2.84289 15.9906L-2.79588e-06 15.9906L-1.15248e-06 6.59141Z"
          fill="white"
        />
      </svg>
    </button>
  )
}
ThumbsUp.defaultProps = {
  onClick: () => {},
  className: '',
  width: 16,
  height: 16,
  disabled: false
}
export default ThumbsUp
