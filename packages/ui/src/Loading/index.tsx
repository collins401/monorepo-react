import * as React from 'react'
import { Spin } from 'antd'

export function Loading() {
  return (
    <div className="text-center p-4">
      <Spin />
    </div>
  )
}
