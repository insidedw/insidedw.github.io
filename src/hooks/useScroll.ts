import { useEffect, useState } from 'react'

export function useScroll() {
  const [y, setY] = useState(0)

  useEffect(() => {
    const callback = () => {
      setY(window.scrollY)
    }
    window.addEventListener('scroll', callback)
    return () => {
      window.removeEventListener('scroll', callback)
    }
  }, [])

  return { y }
}
