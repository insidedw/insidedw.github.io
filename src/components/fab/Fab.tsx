import { useScroll } from '../../hooks/useScroll'

const isClient = typeof window === 'object'

interface Props {
  onClick: () => void
}
export function Fab({ onClick }: Props) {
  const { y } = useScroll()
  const height = isClient ? window.innerHeight : 0

  if (height / 3 > y) {
    return null
  }
  return (
    <div className={'fab-wrapper'}>
      <a className="fab" onClick={onClick}>
        <span className="blind">go to top</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
          <g fill="#000" fillOpacity=".01" opacity=".01">
            <path d="M0 0h14v14H0z"></path>
            <path d="M1.167 1.167h11.667v11.667H1.167z" opacity=".7"></path>
          </g>
          <path stroke="#000" strokeWidth="1.3" d="M2.526 9.236l4.472-4.472 4.472 4.472"></path>
        </svg>
      </a>
    </div>
  )
}
