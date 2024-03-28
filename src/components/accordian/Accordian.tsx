import React, { PropsWithChildren } from 'react'

interface Props {
  summary: string
}
export function Accordian({ summary, children }: PropsWithChildren<Props>) {
  const element = children ? (
    <details className={'accordian'}>
      <summary>{summary}</summary>
      {children}
    </details>
  ) : (
    <>{summary}</>
  )
  return <p className={'done'}>{element}</p>
}
