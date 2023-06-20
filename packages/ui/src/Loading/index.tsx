import * as React from 'react'
import { Spin } from 'antd'

export function Loading() {
  return (
    <div className="text-center p-5 asd-loading">
      <Spin />
    </div>
  )
}
