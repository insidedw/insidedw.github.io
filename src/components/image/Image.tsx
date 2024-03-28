import React, { ImgHTMLAttributes, VideoHTMLAttributes } from 'react'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  srcList: string[]
}
export function Image({ srcList, alt, ...rest }: Props) {
  return (
    <div className={'maple-video-wrapper'}>
      {srcList.map((src) => {
        return <img className={'maple-video'} alt={alt} src={src} {...rest} />
      })}
    </div>
  )
}
