interface ThumbsDownProps {
  onClick?: () => void
  className?: string
  width?: number
  height?: number
  disabled?: boolean
}

const ThumbsDown = ({
  onClick,
  disabled,
  className,
  width,
  height
}: ThumbsDownProps) => {
  return (
    <button
      onClick={onClick}
      aria-label="Thumbs Down"
      disabled={disabled}
      className={`square p-1.5 object-center bg-thumb-down ${
        !disabled && 'hover:bg-thumb-down-200'
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
          d="M12.6044 8.89261C10.6667 11.5914 9.97914 12.3606 10.0939 13.9228C10.2086 15.485 9.8804 15.9145 9.09963 15.9915C8.31885 16.0684 6.85283 15.6656 6.59547 13.1086C6.48439 12.0023 7.31956 9.82432 7.31956 9.82432L1.47561 9.82129C0.64821 9.82129 0 9.48638 0 8.41898C0 7.41899 1.16888 7.11822 1.16888 7.11822C0.705391 6.92086 0.411133 6.48115 0.421017 6.00069C0.418215 5.32278 0.994884 4.76991 1.71195 4.76302C1.22145 4.57668 0.941252 4.08616 1.04546 3.59623C1.1344 3.00902 1.61511 2.54375 2.23399 2.44586C1.82873 2.17481 1.66115 1.68354 1.82258 1.23974C2.08497 0.653748 2.77752 0.00768948 4.33313 0.00768948L11.6001 0.00768948C12.0326 -0.0440559 12.4523 0.168969 12.6456 0.538364L12.6456 8.56591C12.6486 8.67611 12.6347 8.78615 12.6044 8.89261ZM16 9.40859H13.1571L13.1571 0.00941753H16L16 9.40859Z"
          fill="white"
        />
      </svg>
    </button>
  )
}

ThumbsDown.defaultProps = {
  onClick: () => {},
  className: '',
  width: 16,
  height: 16,
  disabled: false
}
export default ThumbsDown
