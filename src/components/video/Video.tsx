import React, { VideoHTMLAttributes } from 'react'

interface Props extends VideoHTMLAttributes<HTMLVideoElement> {
  srcList: string[]
}
export function Video({ srcList, autoPlay = true, muted = true, loop = true, ...rest }: Props) {
  return (
    <div className={'maple-video-wrapper'}>
      {srcList.map((src, idx) => {
        return <video key={`${src}_${idx}`} className={'maple-video'} src={src} autoPlay muted loop {...rest} />
      })}
    </div>
  )
}
