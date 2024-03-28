import React, { ImgHTMLAttributes } from 'react'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  srcList: string[]
}
export function Image({ srcList, alt, ...rest }: Props) {
  return (
    <div className={'maple-video-wrapper'}>
      {srcList.map((src, idx) => {
        return <img key={`${src}_${idx}`} className={'maple-video'} alt={alt} src={src} {...rest} />
      })}
    </div>
  )
}
